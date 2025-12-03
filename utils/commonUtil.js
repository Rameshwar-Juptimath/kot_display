var log4js = require('log4js');
log4js.configure({
  appenders: { commonUtil: { type: 'file',filename:"restaurant.log"} },
  categories: { default: { appenders: ['commonUtil'], level: 'trace' } }
});
var logger = log4js.getLogger('commonUtil');
var CommonUtil = function(){};
commonUtil = new CommonUtil();
CommonUtil.prototype.handleError = function(event,eventName,error, message ,async){
    logger.error(message, error);
    if(async){
        event.sender.send(eventName,{success:false, error:err, message:message});
    }else{
        event.returnValue = {success:false, error:error, message:message};
    }
}

CommonUtil.prototype.clone = function(obj){
    return JSON.parse(JSON.stringify(obj));
}
module.exports = commonUtil;