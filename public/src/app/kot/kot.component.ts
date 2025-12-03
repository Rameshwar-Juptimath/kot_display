import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { interval, Subscription } from 'rxjs';
import { AppService } from '../appservice.service';
import { CommonUtil } from '../utils/index';

@Component({
  selector: 'app-kot',
  templateUrl: './kot.component.html',
  styleUrls: ['./kot.component.css']
})
export class KotComponent implements OnInit, OnDestroy {

  constructor(private routes: Router, public _appservice: AppService) { }
  jwtHelper: JwtHelperService = new JwtHelperService();
  decode = this.jwtHelper.decodeToken(localStorage.getItem('token'));
  selectedSpd:any;
  spds;

  ngOnInit() {
    this.getSPDs(this.decode.companyId);
    this.startClockTimer(true);
    this.startTimer();
  }
  ngOnDestroy() {
    this.stopTimer();
    this.startClockTimer(false);
  }

  logout() {
    localStorage.removeItem("token");
    this.routes.navigate(['/login']);
  }

  spdChange(){
    if(this.timerSub && !this.timerSub.closed){
      this.timerSub.unsubscribe();
    }
    if(typeof this.selectedSpd === "string"){
      return;
    }
    this.getActiveKot(this.selectedSpd);
    this.startTimer();
  }

  getSPDs(companyId){
    this._appservice.getStockPointDiv(companyId).subscribe((data:any)=>{
      this.spds = data.data;
    }, error => {
      alert("Error Fetching Stock Point division");
    })
  }

  timerSub:Subscription;
  kotData;
  getActiveKot(spd:any){
    this.pendingItemsMap = new Map();
    this.pendingKotMap = new Map();
    this.cancelledItemMap = new Map();
    this.deliveredItemMap = new Map();
    this.itemsReadyForDeliveryMap = new Map();
    this.tableItems=[];
    this._appservice.getActiveKot(this.decode.companyId, this.decode.posId, spd.stockPointId, spd.stockPointDivId)
    .subscribe((data:any)=>{
      this.kotData=data.data;
      this.processKotData(data.data);
    }, error=> {
      console.log(error);
    })
  }

  clockSub:Subscription;
  currentTime:string;
  startClockTimer(start:boolean) {
    if(start) {
      this.clockSub = interval(1000).subscribe(data=>{
        this.currentTime = CommonUtil.formatDate(new Date(), 'hh:mm:ss a');
      });
    } else {
      if(this.clockSub && !this.clockSub.closed) {
        this.clockSub.unsubscribe();
      }
    }
  }

  startTimer(){
    if(this.selectedSpd){
      this.timerSub = interval(30000).subscribe(data =>{
        this.getActiveKot(this.selectedSpd);
      });
    }
  }

  stopTimer(){
    if(this.timerSub && !this.timerSub.closed){
      this.timerSub.unsubscribe();
    }
  }

  pendingKots:any[] = [];
  deliveredItems:any[]=[];
  itemsReadyForDelivery:any[]=[];
  cancelledItems:any[]=[];
  pendingItems:any[]=[];

  processKotData(kots) {
    for(let kot of kots) {
      switch(kot.status) {
        case "ORDERED":
        this.addPendingKot(kot);
        break;
        case "ACCEPTED":
          this.addPendingKot(kot);
          this.addPendingItems(kot);
        break;
        case "READY":
          this.addPendingKot(kot);
          this.addItemForDelivery(kot);
        break;
        case "CANCELLED":
          this.addCancelledItems(kot);
        break;
        case "DELIVERED":
          this.addDeliveredItems(kot);
        break;
      }
    }
    this.pendingItems = CommonUtil.sortJsonArray(Array.from(this.pendingItemsMap.values()),'sortOrder',true);
    this.deliveredItems = Array.from(this.deliveredItemMap.values());
    this.itemsReadyForDelivery = Array.from(this.itemsReadyForDeliveryMap.values());
    this.pendingKots = Array.from(this.pendingKotMap.values());
    this.pendingKots = CommonUtil.sortJsonArray(this.pendingKots,"kotNo", false);
    this.cancelledItems = Array.from(this.cancelledItemMap.values());
  }

  pendingKotMap:Map<string, any> = new Map();
  addPendingKot(kot) {
    if(!this.pendingKotMap.get(kot.kotId)){
      let pKot = {kotId:kot.kotId, kotNo:kot.kotNo, tableId:kot.tableId, tableNo:kot.tableNo, createdTime:CommonUtil.formatDate(kot.createdTime,'hh:mm a'),
      waiterName:kot.waiterName,ktqIds:[kot.id]};
      this.pendingKotMap.set(kot.kotId,pKot);
    } else {
      let pKot = this.pendingKotMap.get(kot.kotId);
      pKot.ktqIds.push(kot.id);
    }
  }

  pendingItemsMap:Map<string,any> = new Map();
  addPendingItems(kot){
    if(this.pendingItemsMap.get(kot.itemcode)){
      let item = this.pendingItemsMap.get(kot.itemcode);
      item.qty = item.qty+kot.qty;
      item.ktqIds.push(kot.id);
      if(kot.instruction){
        item.instruction = true;
      }
    } else {
      let item:any = {itemcode:kot.itemcode, qty:kot.qty, uomSize:kot.uomSize, base_qty:kot.base_qty, itemname:kot.itemname,
      ktqIds:[kot.id], sortOrder:kot.sortOrder};
      if(kot.instruction){
        item.instruction = true;
      }
      item.colorCode = "#000000";
      if(kot.colorCode){
        item.colorCode = kot.colorCode;
      }
      this.pendingItemsMap.set(kot.itemcode, item);
    }
  }

  itemsReadyForDeliveryMap:Map<string, any> = new Map();
  addItemForDelivery(kot) {
    if(this.itemsReadyForDeliveryMap.get(kot.itemcode+"-"+kot.tableId)){
      let item = this.itemsReadyForDeliveryMap.get(kot.itemcode+"-"+kot.tableId);
      item.qty = item.qty + kot.qty;
      item.selectedQty = item.qty;
      item.ktqIds.push(kot.id);
    } else {
      let item:any = {itemcode:kot.itemcode,itemname:kot.itemname, qty:kot.qty, uomSize:kot.uomSize, base_qty:kot.base_qty, tableId:kot.tableId, 
        tableNo:kot.tableNo, ktqIds:[kot.id]};
        item.selectedQty = item.qty;
        this.itemsReadyForDeliveryMap.set(kot.itemcode+"-"+kot.tableId, item);
    }
  }

  cancelledItemMap:Map<string, any> = new Map();
  addCancelledItems(kot){
    if(this.cancelledItemMap.get(kot.itemcode+"-"+kot.kotId)) {
      let item = this.cancelledItemMap.get(kot.itemcode);
      item.qty = item.qty + kot.qty;
    } else {
      let item = {kotId:kot.kotId, kotNo:kot.kotNo, tableId:kot.tableId, tableNo:kot.tableNo, itemname:kot.itemname,
        itemcode:kot.itemcode, qty:kot.qty, uomSize:kot.uomSize, base_qty:kot.base_qty, waiterName:kot.waiterName};
      this.cancelledItemMap.set(kot.itemcode+"-"+kot.kotId, item);
    }
  }

  deliveredItemMap:Map<string, any> = new Map();
  addDeliveredItems(kot) {
    if(this.deliveredItemMap.get(kot.itemcode+"-"+kot.kotId)) {
      let item = this.deliveredItemMap.get(kot.itemcode+"-"+kot.kotId);
      item.qty = item.qty + kot.qty;
    } else {
      let item = {kotId:kot.kotId, kotNo:kot.kotNo, tableId:kot.tableId, tableNo:kot.tableNo, 
        itemcode:kot.itemcode,itemname:kot.itemname, qty:kot.qty, uomSize:kot.uomSize, base_qty:kot.base_qty, waiterName:kot.waiterName};
      this.deliveredItemMap.set(kot.itemcode+"-"+kot.kotId, item);
    }
  }

  tableItems:any[]=[];
  displayTableItems(kot) {
    this.instrTable = [];
    this.readyItemTable=[];
    this.clearPendingKotSelection();
    let tblMap:Map<string, any> = new Map(); 
    for(let kt of this.kotData) {
      if(kt.tableId == kot.tableId && kt.cancel==0 && ["ORDERED","ACCEPTED"].indexOf(kt.status)>=0) {
        if(tblMap.get(kt.itemcode)){
          let it = tblMap.get(kt.itemcode);
          it.qty = it.qty+kt.qty;
          it.ktqIds.push(kt.id);
          switch(kt.status) {
            case "ORDERED":
              it.accQty = it.accQty + kt.qty;
              it.accIds.push(kt.id);
              it.selectedAccQty = it.accQty;
            break;
            case "ACCEPTED":
              it.rQty = it.rQty + kt.qty;
              it.rIds.push(kt.id);
              it.selectedRQty = it.rQty;
            break;
          }
        } else {
          let it:any = {itemname:kt.itemname, itemcode:kt.itemcode, uomSize:kt.uomSize, base_qty:kt.base_qty,
            qty:kt.qty, kotTransactionId:kt.kotTransactionId, kotId:kt.kotId , ktqIds:[kt.id], accQty:0, rQty:0,
            accIds:[],rIds:[]};
            switch(kt.status) {
              case "ORDERED":
                it.accQty = it.accQty + kt.qty;
                it.accIds.push(kt.id);
                it.selectedAccQty = it.accQty;
              break;
              case "ACCEPTED":
                it.rQty = it.rQty + kt.qty;
                it.rIds.push(kt.id);
                it.selectedRQty = it.rQty;
              break;
            }
          tblMap.set(kt.itemcode, it);
        }
      }
    }
    this.tableItems = Array.from(tblMap.values());
    kot.tableItems = this.tableItems;
  }

  getNumAsArray(num:number){
    let arr=[];
    for(let i=0;i<num;i++){
      arr.push(i+1);
    }
    return arr;
  }

  updateKotQtyStatus(ktqIds, status, qty) {
    let ids =ktqIds.splice(0,qty);
    this.stopTimer();
    this._appservice.updateKotQtyStatus(ids, this.decode.companyId, this.decode.posId,status)
    .subscribe((data:any)=>{
      this.getActiveKot(this.selectedSpd);
      this.startTimer();
    },error => {
      console.log(error);
      alert("Error while updating status. Kindly try again");
    })
  }

  deliverKotItem(ktqIds, qty){
    this.stopTimer();
    let ids = ktqIds.splice(0,qty);
    this._appservice.deliverKotItem(ids).subscribe((data:any) =>{
      this.getActiveKot(this.selectedSpd);
      this.startTimer();
    }, error => {
      alert("Error while kot delivery ");
    });
  }

  updateKotStatus(kotId, currStatus, status) {
    this.stopTimer();
    let ktqIds = [];
    for(let kt of this.kotData) {
      if(kt.kotId==kotId && kt.status==currStatus) {
        ktqIds.push(kt.id);
      }
    }
    if(ktqIds.length) {
      this._appservice.updateKotQtyStatus(ktqIds,this.decode.companyId, this.decode.posId, status)
      .subscribe((data:any)=> {
        this.getActiveKot(this.selectedSpd);
        this.startTimer();
      }, error=> {
        this.startTimer();
        alert("Error happened while updating kot status");
      });
    }else {
      this.startTimer();
    }
  }

  instrTable:any[]=[];
  displayInstrTable(item){
    this.tableItems = [];
    this.readyItemTable=[];
    item.readyItemTable = [];
    this.clearpendingItemsSelection();
    let instrMap:Map<string,any> = new Map();
    for(let ko of this.kotData){
      if(ko.itemcode==item.itemcode && ko.instruction && ko.status=="ACCEPTED") {
        if(instrMap.get(ko.itemcode+"-"+ko.kotId)){
          let it = instrMap.get(ko.itemcode+"-"+ko.kotId);
          it.qty = it.qty+ko.qty;
          it.selectedQty = it.qty;
          it.ktqIds.push(ko.id);
        }else {
          let it = CommonUtil.clone(ko);
          it.ktqIds = [ko.id];
          it.selectedQty = it.qty;
          instrMap.set(ko.itemcode+"-"+ko.kotId, it);
        }
      }
    }
    this.instrTable = Array.from(instrMap.values());
    item.instrTable = this.instrTable;
  }

  readyItemTable:any[]=[];
  displayreadyItemTable(item){
    this.tableItems = [];
    this.instrTable=[];
    item.instrTable=[];
    this.readyItemTable = [];
    this.clearpendingItemsSelection();
    let map:Map<string,any> = new Map();
    for(let ko of this.kotData){
      if(ko.itemcode==item.itemcode && ko.status=="ACCEPTED") {
        if(map.get(ko.itemcode+"-"+ko.kotId)){
          let it = map.get(ko.itemcode+"-"+ko.kotId);
          it.qty = it.qty+ko.qty;
          it.selectedQty = it.qty;
          it.ktqIds.push(ko.id);
        }else {
          let it = CommonUtil.clone(ko);
          it.ktqIds = [ko.id];
          it.selectedQty = it.qty;
          map.set(ko.itemcode+"-"+ko.kotId, it);
        }
      }
    }
    this.readyItemTable = Array.from(map.values());
    item.readyItemTable = this.readyItemTable;
  }

  clearpendingItemsSelection(){
    for(let p of this.pendingItems) {
      p.instrTable = [];
      p.readyItemTable=[];
    }
  }

  clearPendingKotSelection() {
    for(let k of this.pendingKots) {
      k.tableItems = [];
    }
  }
  
}
