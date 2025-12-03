var pool = require('../utils/db');
var DBUtil = function(){};
var dbUtil = new DBUtil();

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
            // logger.info(query);
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
                    // logger.error("Error inserting ",err);
                    reject(err);
                }else{
                    resolve(result);
                }
            });
        }catch(error){
            // logger.error("Error inserting from catch ",err);
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
        let sql = " update "+query.tablename+" set ";
        for(let col in query.set){
            if (null==query.set[col]) {
                sql = sql +col+" = null,"
            } else {
                sql = sql +col+" = '"+query.set[col]+"',";
            }
        }
        sql = sql.slice(0, -1);
        if(query.where){
            sql+=" where "+query.where+" ";
        }
        connection.query(sql, query.parameters, (err, result)=>{
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

DBUtil.prototype.deleteRecords = function(connection, query, releaseConnection) {
    return new Promise(async (resolve, reject) => {
        try {
            if(!connection){
                let err;
                [err,connection] = await to(dbUtil.getConnection());
                if(err){
                    logger.error("Error while getting connection");
                    reject(err);
                    return;
                }
                releaseConnection=true;
            }
            let sql = " delete from "+ query.tablename;
            if(query.where){
                sql = sql + " where "+query.where;
            }
            connection.query(sql, query.parameters, (err, result)=>{
                if(releaseConnection){
                    connection.release();
                }
                if(err){
                    logger.error("Error occured while delete query "+ sql);
                    logger.error(err);
                    reject(err);
                }else{
                    resolve(result);
                }
            });
        } catch(error) {
            reject(error);
        }
    });
}

module.exports=dbUtil;