var express = require('express');
var dateUtil = require("../utils/dateUtil");
var dbUtil = require('./dbutil.js');
var to = require('./to');
var router = express.Router();

router.post('/kot/active', async (req, res) => {
    let err, data, connection;
    [err, connection] = await to(dbUtil.getConnection());
    if(err){
        res.status(500).json({success:false, error:err});
        return;
    }
    connection.config.dateStrings = true;
    let param = req.body;
    console.log(JSON.stringify(param));
    let qry = {tablename:"kot_item_qty ktq", columns:["ktq.id","ktq.kotId","ktq.kotTransactionId", "ktq.kotNo", "ktq.tableId", 
    "ktq.tableNo", "ktq.createdTime", "ktq.updatedTime","ktq.status", "ktq.waiterName", "ktq.qty","ktq.itemcode","it.itemId", "it.itemname",
    "ktq.cancel","sca.stockPointId", "sca.stockPointDivId","uom.uomSize","uom.base_qty", "ktq.instruction",
    "it.salecategoryId", "sca.sortOrder", "sca.colorCode"], 
    parameters:[param.companyId, param.posId, param.stockPointId, param.stockPointDivId]};
    qry.join = " join item_sku sku on sku.itemcode=ktq.itemcode and sku.companyId=ktq.companyId ";
    qry.join = qry.join+" join item it on it.itemId=sku.itemId and it.companyId=ktq.companyId ";
    qry.join = qry.join+" join sale_category_master scm on scm.salecategoryId=it.salecategoryId ";
    qry.join = qry.join+" join sale_category_attribute sca on sca.salecategoryId = scm.salecategoryId ";
    qry.join = qry.join+" join uom_relation uomr on uomr.uomRelationId= sku.uomRelationId ";
    qry.join = qry.join+" join uom_size_master uom on uom.uomSizeMasterId = uomr.uomSizeMasterId ";
    qry.where = " ktq.companyId=? and ktq.posId=? and sca.stockPointId=? and sca.stockPointDivId=? ";
    [err, data] = await to(dbUtil.selectRecords(qry, connection,true));
    if(err){
        res.status(500).json({success:false, error:err});
        return;
    }
    res.json({success:true, data:data});
});

router.get('/spd/:companyId', async (req, res) => {
    let err, data, connection;
    [err, connection] = await to(dbUtil.getConnection());
    if(err){
        res.status(500).json({success:false, error:err});
        return;
    }
    let qry = {tablename:"stock_point_division_master spd", columns:["distinct spd.stockPointId", "spd.divisionId as stockPointDivId",
    "spd.divisionName"], parameters:[req.params.companyId], where:" spd.companyId=? and sca.printOrDisp=2"};
    qry.join = " join sale_category_attribute sca on sca.stockPointId=spd.stockpointId and sca.stockPointDivId=spd.divisionId and sca.companyId=spd.companyId ";
    [err, data] = await to(dbUtil.selectRecords(qry, connection,true));
    if(err){
        res.status(500).json({success:false, error:err});
        return;
    }
    res.json({success:true, data:data});
});

router.post('/ktqupdate', async (req, res) => {
    let param = req.body;
    let err, connection, data;
    [err, connection] = await to(dbUtil.getConnection());
    if(err) {
        console.log("Error while getting connection kot_item_qty status "+err);
        res.status(500).json({success:false, error:err});
        return;
    }
    let query = {tablename:"kot_item_qty", set:{status:param.status, updatedTime:dateUtil.format('YYYY-MM-DD HH:mm:ss',new Date())},
    where:" id in ? and companyId=? and posId=?", parameters:[[param.ktqIds], param.companyId, param.posId]};
    [err, data] = await to(dbUtil.updateRecords(query,connection,true));
    if(err){
        console.log("Error while updating kot_item_qty status "+err);
        res.status(500).json({success:false, error:err});
        return;
    }
    res.json({success:true, data:data});
});

router.post('/kotdelivery', async (req, res) => {
    let param = req.body;
    let err, connection, data;
    [err, connection] = await to(dbUtil.getConnection());
    if(err){
        console.log("Error while connection kotdelivery");
        res.status(500).json({success:false, error:err});
        return;
    }
    connection.beginTransaction(async (err1) =>{
        if(!err1) {
            let kotTransIdMap = {};
            for(let id of param.ktqIds){
                let query = {tablename:"kot_item_qty", columns:["kotTransactionId","kotId"], where:" id=? ", parameters:[id]};
                let [err, kotDetail] = await to(dbUtil.selectRecords(query, connection, false));
                if(err){
                    console.log("Error fetching kotDetail kotdelivery "+err);
                    res.status(500).json({success:false, err:err});
                    connection.release();
                    return;
                }
                kotTransIdMap[kotDetail[0].kotTransactionId] = kotDetail[0];
                query.set= {status:"DELIVERED",updatedTime:dateUtil.format('YYYY-MM-DD HH:mm:ss', new Date())};
                query.where = " id=?";
                [err, data] = await to(dbUtil.updateRecords(query, connection, false));
                if(err) {
                    console.log("Error updating ktq kotdelivery "+err);
                    res.status(500).json({success:false, err:err});
                    connection.release();
                    return;
                }
            }
            for(let kt in kotTransIdMap){
                query={tablename:"kot_item_qty", columns:["count(1) as count"], where:" kotTransactionId=? and status in ('ORDERED','ACCEPTED','READY')",
                parameters:[kt]};
                [err, data] = await to(dbUtil.selectRecords(query, connection, false));
                if(err){
                    console.log("Error gettting count from ktq kotdelivery "+err);
                    res.status(500).json({success:false, err:err});
                    connection.release();
                    return;
                }
                if(data && data.length && !parseInt(data[0].count)) {
                    query= {tablename:"kot_transaction", set:{status:"DELIVERED", updatedTime:dateUtil.format('YYYY-MM-DD HH:mm:ss', new Date())},
                    where:"kotTransactionId=?", parameters:[kt]};
                    [err, data] = await to(dbUtil.updateRecords(query, connection, false));
                    if(err){
                        console.log("Error while updating kot Trans kotdelivery "+err);
                        res.status(500).json({success:false, err:err});
                        connection.release();
                        return;
                    }
                    let kotObj = kotTransIdMap[kt]
                    query ={tablename:"kot_transaction", columns:["count(1) as count"], where:" kotId=? and status in ('ORDERED')", parameters:[kotObj.kotId]};
                    [err, data] = await to(dbUtil.selectRecords(query, connection, false));
                    if(err){
                        console.log("Error while getting kot Trans count kotdelivery "+err);
                        res.status(500).json({success:false, err:err});
                        connection.release();
                        return;
                    }
                    if(data && data.length && !parseInt(data[0].count)){
                        query = {tablename:"kot_master", set:{status:"DELIVERED", updatedTime:dateUtil.format('YYYY-MM-DD HH:mm:ss')},
                        where:" kotId=?", parameters:[kotObj.kotId]};
                        [err, data] = await to(dbUtil.updateRecords(query, connection, false));
                        if(err){
                            console.log("Error while getting kot Trans count kotdelivery "+err);
                            res.status(500).json({success:false, err:err});
                            connection.release();
                            return;
                        }
                    }

                }
            }
            connection.commit((err1)=>{
                if(err1) {
                    connection.rollback(()=>{connection.release();});
                    console.log("error while commit kotdelivery "+err1);
                }else {
                    connection.release();
                    res.json({success:true, data:"Update success"});
                }
            })
        }else{
            connection.release();
            res.status(500).json({success:false, error:err1});
        }
    });
});

router.post('/get-data-db', async (req, res) =>{
    let [err, connection] = await to(dbUtil.getConnection());
    if(err){
        res.status(500);
        res.json({success:false, error:err});
        return;
    }
    let param = req.body;
    if(param.query.connectionConfig) {
        for (let key in param.query.connectionConfig) {
            connection.config[key] = param.query.connectionConfig[key];
        }
    }
    let [err1, data] = await to(dbUtil.selectRecords(param.query, connection, true));
    if(err1){
        res.status(500);
        res.json({success:false, error:err});
    }else{
        res.json({success:true, data:data});
    }
});

router.post('/insert-update-delete-db', async (req, res)=>{
    let [err, connection] = await to(dbUtil.getConnection());
    if(err){
        res.status(500);
        res.json({success:false, error:err});
        return;
    }
    let param = req.body;
    if(param.connectionConfig) {
        for (let key in param.query.connectionConfig) {
            connection.config[key] = param.query.connectionConfig[key];
        }
    }
    if((param.insertRecords && param.insertRecords.length) || (param.updateRecords && param.updateRecords.length) 
        || (param.deleteRecords && param.deleteRecords.length)) {
        connection.beginTransaction(async (err)=>{
            if(err){
                connection.release();
                res.status(500);
                res.json({success:false, error:err})
                return;
            }
            if(param.insertRecords && param.insertRecords.length) {
                for(const qry of param.insertRecords) {
                    [err, data] = await to(dbUtil.insertRecords(qry, connection, false));
                    if(err) {
                        break;
                    }
                }
            }
            if(!err && param.updateRecords && param.updateRecords.length) {
                for(const qry of param.updateRecords) {
                    [err, data] = await to(dbUtil.updateRecords(qry, connection, false));
                    if(err){
                        break;
                    }
                }
            }
            if(!err && param.deleteRecords && param.deleteRecords.length) {
                for(const qry of param.deleteRecords) {
                    [err, data] = await to(dbUtil.deleteRecords(connection, qry, false));
                    if(err){
                        break;
                    }
                }
            }
            if(!err) {
                connection.commit((err) =>{
                    if(err) {
                        connection.rollback(()=>{connection.release();});
                        res.status(500);
                        res.json({success:false, error:err});
                    } else {
                        connection.release();
                        res.json({success:true, data:"successFully completed the transaction"});
                    }
                });
            }else{
                connection.release();
                res.status(400);
                res.json({success:false, error:err});
            }
        })
    } else {
        res.status(400);
        res.json({success:false, error:"No data is present for db actions"});
    }
});

const ThermalPrinter = require("node-thermal-printer").printer;
const PrinterTypes = require("node-thermal-printer").types;
router.post('/print-kot', async(req, res)=>{
    let param = req.body;
    let printer = new ThermalPrinter({
        type:PrinterTypes.EPSON,
        interface:'printer:'+param.printerName
    });
    // printer.init({
    //     type: 'epson',
    //     //interface: '/dev/usb/lp0',
    //     interface:'printer:'+param.printerName
    // });
    let isConnected = await printer.isPrinterConnected();
    if(!isConnected){
        res.status(500).json({success:false, error:err});
        return;
    }
    printer.alignLeft();
    printer.setTextDoubleHeight();
    let spd = param.stockPointDivision? param.stockPointDivision:" ";
    printer.leftRight(" ", spd);
    printer.setTextNormal();
    let kotNo = "KOT No:"+param.kotNo;
    let sessionCode = " ";
    if(param.billNo){
        sessionCode = param.billNo;
    }
    if(param.sessionCode){
        sessionCode = sessionCode+param.sessionCode;
    }
    printer.leftRight(kotNo, sessionCode);
    let dt= "Date/Time:"+param.date;
    let tm = param.billTime?param.billTime:" ";
    printer.leftRight(dt,tm);
    let tbl = " ";
    if(param.tableNo){
        tbl=param.tableNo;
    }
    let wtr = " ";
    if(param.waiterName){
        wtr = "Wtr. Name:"+param.waiterName;
    }
    if(param.tableNo || param.waiterName){
        printer.leftRight(wtr,tbl);
    }
    printer.println(" ");
    printer.tableCustom([                               
        { text:"Code", align:"LEFT", width:0.10 },
        { text:"Item", align:"CENTER", width:0.70 },
        { text:"Qty", align:"CENTER", width:0.10},
    ]);
    printer.drawLine();
    for(let it of param.kotItems){
        let name = it.itemname;
        if(it.base_qty!=1){
            name = name+"-"+it.uomSize;
        }
        printer.tableCustom([                               
            { text:it.itemcode, align:"LEFT", width:0.10 },
            { text:name, align:"LEFT", width:0.70},
            { text:it.qty, align:"CENTER", width:0.10 }
        ]);
    }
    printer.cut();
    try{
        let execute = await printer.execute();
        res.json({success:true});
    } catch(error) {
        res.status(500).json({success:false, error:error});
    }
});



module.exports = router; 