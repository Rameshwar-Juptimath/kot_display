var express = require('express');
var dateUtil = require("../utils/dateUtil");
var dbUtil = require('./dbutil.js');
var to = require('./to');
var router = express.Router();

router.get('/activesession', async (req, res)=>{
    let companyId = req.query.companyId;
    let posId = req.query.posId;
    if(!companyId || !posId){
        res.status(400).json({success:false, error:"companyId and PosId are mandatory"});
        return;
    }
    let query = {tablename:"transaction_date", columns:["transactionDateId","companyId","posId","date_format(transactionDate, '%Y-%m-%d') as transactionDate","sessionNo",
    "active","sessionCode","billNo"], where:"companyId=? and posId=? and active=1", parameters:[companyId, posId]};
    query.connectionConfig = {dateStrings:true};
    let [err, connection] = await to(dbUtil.getConnection());
    if(err){
        console.log(err);
        res.status(500).json({success:false, error:err.message, message:"Error while getting connection Check mysql configuration"});
        return;
    }
    let [err1, data] = await to(dbUtil.selectRecords(query, connection, true));
    if(err1){
        console.log(err1);
        res.status(500).json({success:false, error:err1.message, message:"Error getting session data."});
        return;
    }
    if(!data || !data.length){
        console.log("No Active session ");
        res.status(409).json({success:false, error:"No Active session available", message:"No active session available. Configure a session from POS"});
        return;
    }
    res.json({success:true, data:data});
});

router.get('/sections',async (req, res)=>{
    let companyId = req.query.companyId;
    if(!companyId){
        res.status(400).json({success:false, error:"companyId is mandatory"});
        return;
    }

    let [err, connection] = await to(dbUtil.getConnection());
    if(err){
        console.log(err);
        res.status(500).json({success:false, error:err.message, message:"Error while getting connection Check mysql configuration"});
        return;
    }
    let query = {tablename:"section_master", columns:["sectionId","companyId","sectionname","tableBG"], 
      where:" companyId=? and deleted=0", parameters:[companyId]};
      let [err1, data] = await to(dbUtil.selectRecords(query, connection, true));
      if(err1){
          console.log(err1);
          res.status(500).json({success:false, error:err1.message, message:"Error getting section data."});
          return;
      }
      if(!data || !data.length){
          console.log("No Sections ");
          res.status(409).json({success:false, error:"No section available", message:"No active section available. Configure section"});
          return;
      }
      res.json({success:true, data:data});
});


router.get('/tables',async (req, res)=>{
    let companyId = req.query.companyId;
    let sectionId = req.query.sectionId;
    let posId = req.query.posId;
    let transactionDate = req.query.date;
    let sessionNo = req.query.sessionNo;
    if(!companyId || !sectionId){
        res.status(400).json({success:false, error:"companyId is mandatory"});
        return;
    }

    let [err, connection] = await to(dbUtil.getConnection());
    if(err){
        console.log(err);
        res.status(500).json({success:false, error:err.message, message:"Error while getting connection Check mysql configuration"});
        return;
    }
    let query = {tablename:'table_master tbl'};
    query.columns = ["tbl.tableId", "tbl.companyId","tbl.tableNo" , "tbl.sortOrder","tbl.sectionId", "tbl.status","tbl.lifecycleId",
    "sm.sectionname", "sm.tableBG","tbl.billId", "date_format(eventTime, '%Y-%m-%d %H-%i-%s') as eventTime", "tbl.waiterName","tbl.waiterId"];
    query.join  = " join section_master sm on sm.companyId = tbl.companyId and sm.sectionId=tbl.sectionId ";
    query.where = " tbl.companyId=? and tbl.sectionId=? and tbl.deleted=0 ";
    query.parameters = [companyId, sectionId];
    let [err1, data] = await to(dbUtil.selectRecords(query, connection, false));
    if(err1){
        console.log(err1);
        res.status(500).json({success:false, error:err1.message, message:"Error getting table data."});
        return;
    }
    if(!data || !data.length){
        console.log("No Sections ");
        res.status(409).json({success:false, error:"No Table available", message:"No table available. Configure tables"});
        return;
    }
    let tableMap = {};
    for(let tbl of data){
        tbl.amount = 0;
        tableMap[tbl.tableId] = tbl;
    }
    query = {tablename:" kot_master km "}
    query.columns = ["sum(kt.qty*skur.saleRate) amount", "km.tableId"];
    query.join = " join kot_transaction kt on kt.kotId=km.kotId join table_master tm on tm.tableId=km.tableId ";
    query.join = query.join + " join item_sku sku on sku.itemcode=kt.itemcode join item_sku_rate skur on skur.itemSkuId=sku.itemskuId and skur.sectionId=tm.sectionId "
    query.where = " km.billId=-1  and tm.status=3 and km.companyId=? and km.posId=? and km.date=? "+
        " and km.sessionId=? and tm.sectionId=? group by km.tableId ";
    query.parameters = [companyId, posId, transactionDate, sessionNo, sectionId];
    let data1;
    [err1, data1] = await to(dbUtil.selectRecords(query, connection, true));
    if(err1){
        console.log(err1);
        res.status(500).json({success:false, error:err.message, message:"Error getting table amount. Contact support"});
        return;
    }
    for(let dt of data1){
        if(tableMap[dt.tableId]){
            tableMap[dt.tableId].amount = parseInt(dt.amount);
        }
    }
    res.json({success:true, data:data});
});

router.get('/salescategory',async (req, res)=>{
    let companyId = req.query.companyId;
    if(!companyId){
        res.status(400).json({success:false, error:"companyId is mandatory"});
        return;
    }

    let [err, connection] = await to(dbUtil.getConnection());
    if(err){
        console.log(err);
        res.status(500).json({success:false, error:err.message, message:"Error while getting connection Check mysql configuration"});
        return;
    }
    let query = {tablename:"sale_category_attribute"};
    query.columns = ["salecategoryId", "salesCategoryAlias", "printOrDisp", "stockPointDivId", "rateEditable", "billGroupId", "sortOrder"];
    query.where = " companyId=? order by sortOrder ";
    query.parameters = [companyId];
    let [err1, data] = await to(dbUtil.selectRecords(query, connection, true));
    if(err1){
        console.log(err1);
        res.status(500).json({success:false, error:err1.message, message:"Error getting Sales categories data."});
        return;
    }
    if(!data || !data.length){
        console.log("No Sales categories ");
        res.status(409).json({success:false, error:"No Sales categories", message:"No Sales categories"});
        return;
    }
    res.json({success:true, data:data});
});

router.get('/items',async (req, res)=>{
    let companyId = req.query.companyId;
    let sectionId = req.query.sectionId;
    if(!companyId || !sectionId){
        res.status(400).json({success:false, error:"companyId and sectionId are mandatory"});
        return;
    }

    let [err, connection] = await to(dbUtil.getConnection());
    if(err){
        console.log(err);
        res.status(500).json({success:false, error:err.message, message:"Error while getting connection Check mysql configuration"});
        return;
    }
    let query={};
    query.columns = ["sku.itemskuId", "sku.itemId", "sku.logourl", "sku.uomRelationId","sku.itemcode", "sku_r.sectionId", 
    "sku_r.saleRate", "sku_r.stdUoMRate","sku_r.packUoMRate","sku.frequentlyUsed","it.itemname","it.itemalias","it.itemdesc","it.comboitem","it.invgroupId","it.salecategoryId",
    "it.itemtypeId", "it.purchasetaxId","it.salestaxId","igm.transactionClass", "igm.transactionType","igam.ledgerId", "sku.sortOrder", 
    "sca.stockPointDivId", "sca.printOrDisp","sca.stockPointId", "sca.billGroupId" ,"uom.uomSize","uom.base_qty" ];
    query.join =" join item it on it.itemId = sku.itemId and it.companyId=sku.companyId "+
                " join inv_group_master igm on igm.invgroupId=it.invgroupId and igm.companyId=it.companyId "+
                " join sale_category_master scm on scm.salecategoryId=it.salecategoryId "+
                " join sale_category_attribute sca on sca.salecategoryId = scm.salecategoryId and sca.companyId=sku.companyId "+
                " join inv_group_ac_map igam on igam.invgroupId=it.invgroupId and igam.companyId=it.companyId and igam.transactionType='sale'"+
                " join item_sku_rate sku_r on sku_r.companyId=sku.companyId and sku_r.itemSkuId= sku.itemskuId "+
                " join uom_relation uomr on uomr.uomRelationId= sku.uomRelationId "+
                " join uom_size_master uom on uom.uomSizeMasterId = uomr.uomSizeMasterId ";
    query.where =" sku.companyId=? and sku_r.saleRate >0 and sku_r.sectionId=?";
    query.parameters = [companyId, sectionId];
    query.tablename = "item_sku sku ";
    let [err1, data] = await to(dbUtil.selectRecords(query, connection, true));
    if(err1){
        console.log(err1);
        res.status(500).json({success:false, error:err1.message, message:"Error getting Items data."});
        return;
    }
    if(!data || !data.length){
        console.log("No Sales categories ");
        res.status(409).json({success:false, error:"No Items", message:"No Items"});
        return;
    }
    res.json({success:true, data:data});
});

router.get('/kothistory', async (req, res)=>{
    let companyId = req.query.companyId;
    let posId = req.query.posId;
    let sectionId = req.query.sectionId;
    let sessionId = req.query.sessionNo;
    let tableId = req.query.tableId;
    if(!companyId || !posId || !sectionId || !sessionId || !tableId){
        res.status(400).json({success:false, error:" companyId, posId, sectionId, sessionNo, tableId mandatory", message:"companyId, posId, sectionId, sessionNo, tableId mandatory"});
        return;
    }
    let [err, connection] = await to(dbUtil.getConnection());
    if(err){
        console.log(err);
        res.status(500).json({success:false, error:err.message, message:"Error while getting connection Check mysql configuration"});
        return;
    }
    let query = {tablename:'kot_master km'};
    query.columns = ["sku.itemskuId", "sku.itemId", "sku.logourl", "sku.uomRelationId","sku.itemcode", "sku_r.sectionId",
    "sku_r.saleRate", "sku_r.stdUoMRate","sku_r.packUoMRate", "sku.frequentlyUsed", "it.itemname", "it.itemalias", "it.itemdesc", "it.comboitem", "it.invgroupId", "it.salecategoryId",
    "it.itemtypeId", "it.purchasetaxId", "it.salestaxId", "igm.transactionClass", "igm.transactionType", "igam.ledgerId",
    "sca.sortOrder", "sca.stockPointDivId", "uom.uomSize","uom.base_qty", "km.kotNo", "km.billId","kt.qty","kt.qty as dispQty", "km.kotId", "kt.cancel",
    "uomRelation"];
    query.join = " join kot_transaction kt on kt.kotId=km.kotId and kt.companyId=km.companyId and kt.posId=km.posId ";
    query.join = query.join+" join item_sku sku on sku.itemcode=kt.itemcode and sku.companyId=kt.companyId ";
    query.join = query.join+" join item it on it.itemId=sku.itemId and it.companyId=sku.companyId ";
    query.join = query.join+" join inv_group_master igm on igm.invgroupId=it.invgroupId and igm.companyId=it.companyId ";
    query.join = query.join+" join inv_group_ac_map igam on igam.invgroupId=it.invgroupId and igam.companyId=it.companyId and igam.transactionType='sale'";
    query.join = query.join+" join sale_category_master scm on scm.salecategoryId=it.salecategoryId ";
    query.join = query.join+" join sale_category_attribute sca on sca.salecategoryId = scm.salecategoryId and sca.companyId=sku.companyId ";
    query.join = query.join+" join item_sku_rate sku_r on sku_r.companyId=sku.companyId and sku_r.itemSkuId= sku.itemskuId ";
    query.join = query.join+" join uom_relation uomr on uomr.uomRelationId= sku.uomRelationId "+
                " join uom_size_master uom on uom.uomSizeMasterId = uomr.uomSizeMasterId ";
    query.where = " km.tableId=? and km.billId=-1 and km.companyId=? and km.posId=? and km.sessionId=? and sku_r.sectionId=? order by km.kotNo ";
    query.parameters = [tableId, companyId, posId, sessionId, sectionId];
    let [err1, data] = await to(dbUtil.selectRecords(query, connection, true));
    if(err1){
        console.log(err1);
        res.status(500).json({success:false, error:err1.message, message:"Error getting Items data."});
        return;
    }
    res.json({success:true, data:data});
})

router.get('/instructions', async (req,res)=>{
    let companyId = req.query.companyId;
    let itemId = req.query.itemId;
    if(!companyId || !itemId){
        res.status(400).json({success:false, error:"CompanyId and itemId mandatory", message:"CompanyId and itemId mandatory"});
        return;
    }
    let [err, connection] = await to(dbUtil.getConnection());
    if(err){
        console.log(err);
        res.status(500).json({success:false, error:err.message, message:"Error while getting connection Check mysql configuration"});
        return;
    }
    let query = {tablename:"instruction_master", columns:["instructionId", "prepInstructions", "companyId","itemId"],
                where:" companyId=? and itemId=? ", parameters:[companyId, itemId]};
    let [err1, data] = await to(dbUtil.selectRecords(query, connection, true));
    if(err1){
        console.log(err1);
        res.status(500).json({success:false, error:err1.message, message:"Error getting Items data."});
        return;
    }
    res.json({success:true, data:data});
})

router.get('/cancelreasons', async (req,res)=>{
    let [err, connection] = await to(dbUtil.getConnection());
    if(err){
        console.log(err);
        res.status(500).json({success:false, error:err.message, message:"Error while getting connection Check mysql configuration"});
        return;
    }
    let query = {tablename:"kot_cancel_reason", columns:["reasonId", "reason"]};
    let [err1, data] = await to(dbUtil.selectRecords(query, connection, true));
    if(err1){
        console.log(err1);
        res.status(500).json({success:false, error:err1.message, message:"Error getting Items data."});
        return;
    }
    res.json({success:true, data:data});
})




module.exports = router;