var log4js = require('log4js');
var log = log4js.getLogger('db');
var properties = require('./propertyReader');
var mysql = require('mysql');
var pool = mysql.createPool({
    connectionLimit : 30,
    host     : properties.getProperty('mysqlip'),
    port     : properties.getProperty('mysqlport'),
    user     : properties.getProperty('mysqluser'),
    password : properties.getProperty('mysqlpwd'),
    database : properties.getProperty('mysqldb'),
    supportBigNumbers:true,
    bigNumberStrings:true
    
    });
    pool.getConnection(function(err,connection){
    if (err) {
        log.error(err);
        if(connection){
            connection.release();
        }
        return;
    }
    // connection.config.supportBigNumbers=true;
    // connection.config.bigNumberStrings=true;
    console.log('connected as id ' + connection.threadId);
    
    });
    
    module.exports = pool;