var pool = require('../utils/db');
var express = require('express');
var dbUtil = require('./dbutil.js');
var to = require('./to');
var router = express.Router();
var schedule = require('node-schedule');
var request = require('request');

// var j = schedule.scheduleJob(' */10 * * * *', function () {
//     try {
//         pool.getConnection(async function (err, connection) {
//             if (err) {
//                 throw err;
//             }
//             else {
//                 let backupDetails = await getBackupTableDetails(connection);
//                 if (backupDetails.length > 0) {
//                     for (let i = 0; i < backupDetails.length; i++) {
//                         let td = {};
//                         let tableData = await getRequestedTableData(connection, backupDetails[i]);
//                         if (tableData.value.length > 0) {
//                             let updateBackupTable = await updateBackupTableWithTableName(backupDetails[i], connection, tableData.latestDate);
//                             td.schemaName = backupDetails[i].schemaName;
//                             td.tableName = backupDetails[i].tableName;
//                             td.tableData = tableData.value;
//                             request.post({
//                                 headers: { 'content-type': 'application/json' },
//                                 url: 'http://localhost:3008/backup',
//                                 body: td,
//                                 json: true
//                             }, function (error, response, body) {
//                                 if (err) {
//                                     throw err;
//                                 }
//                                 else {
//                                 }
//                             });
//                         }
//                         else {
//                             console.log('Already Table is up to date');
//                         }
//                     }
//                 }

//             }
//         });
//     }
//     catch (err) {
//         res.status(500);
//         res.json({ error: err });
//     }
// });


router.post('/backup', function (req, res) {
    try {
        pool.getConnection(async function (err, connection) {
            try {
                if (err) {
                    res.status(500);
                    res.json({ status: false, error: 'error with database connection' });
                }
                else {
                    let takeBackup = await insertTableData(req.body, connection);
                    res.status(200);
                    res.json({ success: true, message: "Backup is done" });
                }
            }
            catch (err) {
                res.status(500);
                res.json({ error: err });
            }
        });
    }
    catch (err) {
        res.status(500);
        res.json({ error: err });
    }
});

function getBackupTableDetails(connection) {
    return new Promise((resolve, reject) => {
        let bQuery = ' select * from restaurant_backup';
        connection.query(bQuery, function (err, rows, fields) {
            if (err) {
                reject({ error: err });
                connection.rollback(function () {
                    throw err;
                });
            } else {
                resolve(rows);
            }
        })
    });
}
function updateBackupTableWithTableName(backup, connection, dt) {
    return new Promise((resolve, reject) => {
        let updateQuery = ' update restaurant_backup set lastSyncDate =? where tableName =? and companyId=?';
        connection.query(updateQuery, [dt, backup.tableName, backup.companyId], function (err, rows, fields) {
            if (err) {
                reject({ error: err });
                connection.rollback(function () {
                    throw err;
                });
            } else {
                resolve(rows);
            }
        })
    });
}

function getRequestedTableData(connection, backup) {
    let d = new Date();
    let dt = (d.getFullYear()) + "-" + ("00" + (d.getMonth() + 1)).slice(-2) + "-" + ("00" + d.getDate()).slice(-2) + " " + ("00" + d.getHours()).slice(-2) + ":" + ("00" + d.getMinutes()).slice(-2) + ":" + ("00" + d.getSeconds()).slice(-2);
    let l = backup.lastSyncDate;
    let ld = (l.getFullYear()) + "-" + ("00" + (l.getMonth() + 1)).slice(-2) + "-" + ("00" + l.getDate()).slice(-2) + " " + ("00" + l.getHours()).slice(-2) + ":" + ("00" + l.getMinutes()).slice(-2) + ":" + ("00" + l.getSeconds()).slice(-2);
    return new Promise((resolve, reject) => {
        // let selectQuery ='SELECT * FROM '+ backup.tableName+' where syncDate between ? and ? and companyId=?';
        let selectQuery = 'SELECT * FROM ' + backup.tableName + ' where syncDate > ? and syncDate < ? and companyId=?';
        connection.query(selectQuery, [ld, dt, backup.companyId], function (err, rows, fields) {
            if (err) {
                reject({ error: err });
                connection.rollback(function () {
                    throw err;
                });
            } else {
                let t = {};
                t.latestDate = dt;
                t.value = JSON.parse(JSON.stringify(rows));
                resolve(t);
            }
        })
    });
}
function insertTableData(obj, connection) {
    return new Promise(async (resolve, reject) => {
        try {
            for (let data of obj.tableData) {
                let param = {};
                let query = { tablename: obj.schemaName + "." + obj.tableName, columns: [], value: [] };
                dbUtil.getColumsValues(data, query.columns, query.value);
                [err, data] = await to(dbUtil.insertRecords(query, connection, param.releaseConnection));
                if (err) {
                    reject(err);
                    return;
                }
                else {
                    resolve(data);
                }
            }
        }
        catch (err) {
            res.status(500);
            res.json({ error: err });
        }
    });
}
module.exports = router;

