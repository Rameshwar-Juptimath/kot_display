var pool = require('./utils/db');
var bcrypt = require('bcrypt-nodejs');
var pkUtil = require('./utils/pk')
const saltRounds = 10;
var signup = function () { };
signup.prototype.addUser = function (req, res) {
    let user={};
    user= req.body;
    let salt = bcrypt.genSaltSync(saltRounds);
    let hash = bcrypt.hashSync(user.password, salt);
    let pk = pkUtil.genRandom(15, user.companyId);
    let sql = "INSERT INTO user (id,companyId, username, password, email, phoneNumber, address) VALUES ?";
    let values = [[pk, user.companyId, user.username, hash, user.email, user.phoneNumber, user.address]];
    pool.getConnection(function (err, connection) {
        if (err) {
            throw err;
        }
        connection.query(sql, [values], (err1, result) => {
            connection.release();
            if (err1) {
                throw err;
            } else {
                res.json({status:"success"});
            }
        })
    });

}

module.exports = new signup();