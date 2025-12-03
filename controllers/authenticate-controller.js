var pool = require('../utils/db');
var bcrypt = require('bcrypt-nodejs');
var jwt = require('jsonwebtoken');
var properties = require("../utils/propertyReader");

module.exports.authenticate = function (req, res) {
  var username = req.body.username;
  var password = req.body.password;
  let sql  = "select id,companyId, username, email, password, phoneNumber from user where username=? and deleted=0";
  pool.getConnection(function (err, connection) {
  if(err){
console.log(err);
  }else{
    connection.query(sql, [username], function (error, results, fields) {
      if (error) {
        res.status(500);
        res.json({
          status: false,
          message: 'there are some error with query'
        })
      } else {
        if (results.length) {
          bcrypt.compare(password, results[0].password, function (err, value) {
            if (err || !value) {
              res.status(401);
              res.json({
                status: false,
                message: "username and password does not match"
              });
            } else {
              jwt.sign({id: results[0].id,username: results[0].username,companyId: results[0].companyId, posId:parseInt(properties.getProperty("posId"))}, "dafdasfdafadfadfdaf", function (err, token) {
                if (err) {
                  res.status(500);
                  res.json({
                    status: false,
                    message: "jwt creation failed"
                  });
                } else {
                  res.json({
                    status: true,
                    message: 'successfully authenticated',
                    token: token
                  });

                }
              });
            }
          });
        }
        else {
          res.status(401);
          res.json({
            status: false,
            message: "Username does not exits"
          });
        }
      }
    });
  }
   
  });
}
