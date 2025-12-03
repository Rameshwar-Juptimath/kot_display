import {formatDate } from '@angular/common';

export class CommonUtil{
    
  public static getFloatingPrecision(num:number, precision) : number {
    return parseFloat(num.toFixed(precision));
  }

  public static getFloatingPrecisionStr(num:number, precision) : string {
    return num.toFixed(precision);
  }

  public static clone(object:any){
    return JSON.parse(JSON.stringify(object));
  }

  //length should max of 14
  public static genRandom(length, prefix){
    let str = '1';
    for(let i=0;i<length;i++){
        str = str+'9';
    }
    let int  = parseInt(str);
    return prefix+""+Math.floor(Math.random() * int);
  }

  public static sortJsonArray(array:any[], key:string, asc:boolean){
    array.sort((a,b)=>{
      let val1 = a[key]; let val2 = b[key];
      if(typeof val1==='string'){
        val1=val1.toLowerCase();
      } 
      if(typeof val2==='string'){
        val2=val2.toLowerCase();
      }
      if(val1===val2) return 0;
      if(asc){
        return val1>val2 ?1:-1;
      }else{
        return val1>val2 ?-1:1;
      }
    });
    return array;
  }

  public static getSumJsonArray(array:any[], key:string){
    return array.reduce((sum, val)=>sum+val[key],0);
  }

  public static formatDate(date, format){
    return formatDate(date, format, 'en-US', '+0530');
  }

  public static diffTwoDate(date1:Date, date2:Date){
    return date2.getTime() - date1.getTime();
  }

  public static msTohhMM(millisecond){
    let hours   = Math.floor(millisecond / (1000*60*60));
    let hoursms = Math.floor(millisecond % (1000*60*60));
    let minutes = Math.floor((hoursms)/(60*1000));
    let hoursStr:string = hours+"";
    if(hours<10){
      hoursStr = "0"+hours;
    }
    let minStr:string = minutes+"";
    if(minutes<10){
      minStr = "0"+minutes;
    }
    return hoursStr+":"+minStr;
  }

  public static filterArray(key:string, value, arr:any[]){
    let arrFiltered = arr.filter((obj, index)=>{
      return obj[key]==value;
    });
    return arrFiltered;
  }

  public static addDaytoDate(dt:Date, day:number){
    dt.setDate(dt.getDate()+day);
    return dt;
  }
}