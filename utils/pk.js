
var PK = function(){};
PK.prototype.genRandom = function(length, prefix){
    let str = '1';
    for(let i=0;i<length;i++){
        str = str+'0';
    }
    let int  = parseInt(str);
    return prefix+""+Math.floor(Math.random() * int);
}
module.exports = new PK();