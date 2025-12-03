var pool  = require('./db');
var DBUtil = function(){};
var dbUtil = new DBUtil();
var log4js = require('log4js');
log4js.configure({
  appenders: { dbutillog: { type: 'file',filename:"restaurant.log"} },
  categories: { default: { appenders: ['dbutillog'], level: 'trace' } }
});
var logger = log4js.getLogger('dbutillog');

DBUtil.prototype.getConnection = function(){
    return new Promise((resolve, reject)=>{
        pool.getConnection((err, connection)=>{
            if(err){
                reject(err);
            }else{
                resolve(connection);
            }
        })
    });
}

DBUtil.prototype.selectRecords = function(query, connection, releaseConnection){
    return new Promise((resolve, reject)=>{
        try{
            let sql = "select ";
            for(let col of query.columns){
                sql+=" "+col+","
            }
            sql = sql.slice(0, -1);
            sql+=" from "+query.tablename+" ";
            if(query.join){
                sql+=" "+query.join+" ";
            }
            if(query.where){
                sql+=" where "+query.where+" ";
            }
            logger.info(query);
            connection.query(sql, query.parameters, (err, result)=>{
                if(releaseConnection){
                    connection.release();
                }
                if(err){
                    reject(err);
                }else{
                    resolve(result);
                }
            });
        }catch(error){
            reject(error);
        }
    });
}

DBUtil.prototype.insertRecords = function(query, connection, releaseConnection){
    return new Promise((resolve, reject)=>{
        try{
            let sql = "insert into "+query.tablename+" (";
            for(let col of query.columns){
                sql+=" "+col+","
            }
            sql = sql.slice(0, -1);
            sql+=") VALUES ?";
            connection.query(sql, [[query.value]], (err, result)=>{
                if(releaseConnection){
                    connection.release();
                }
                if(err){
                    logger.error("Error inserting ",err);
                    reject(err);
                }else{
                    resolve(result);
                }
            });
        }catch(error){
            logger.error("Error inserting from catch ",err);
            reject(error);
        }
    });
}
DBUtil.prototype.getColumsValues = function(json, columns, value){
    for(let key in json){
        columns.push(key);
        value.push(json[key]);
    }
    return {column:columns, value:value};
}

DBUtil.prototype.updateRecords = function(query, connection, releaseConnection){
    return new Promise((resolve, reject)=>{
        let sql = " update "+query.tablename+" ";
        for(let col in query.set){
            sql = sql + "set "+col+" = "+query.set[col]+",";
        }
        sql = sql.slice(0, -1);
        if(query.where){
            sql+=" where "+query.where+" ";
        }
        connection.query(sql,query.parameters, (err, result)=>{
            if(releaseConnection){
                connection.release();
            }
            if(err){
                reject(err);
            }else{
                resolve(result);
            }
        })
    });
}

module.exports=dbUtil;