var log4js = require('log4js');
var log = log4js.getLogger('propertyReader');
var propertiesParser = require("properties-parser");
var properties= propertiesParser.read('./application.properties');
var PropUtil = function(){};
var propUtil = new PropUtil();
PropUtil.prototype.getProperty = function(property){
    log.info(properties[property]);
    return properties[property];
}
module.exports=propUtil;