var moment = require('moment');
var DateUtil = function(){};
DateUtil.prototype.format = function(format, date){
    return moment(date).format(format);
}
var dateUtil = new DateUtil();
module.exports=dateUtil;