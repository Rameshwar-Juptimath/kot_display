import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';


@Injectable()
export class AppService {
    public token: string;
    constructor(private httpClient: HttpClient, private router: Router, @Inject('apiBase') private _api: string) { }
    login(user) {
        return this.httpClient.post(this._api + '/login', user,{headers: new HttpHeaders().set('Content-Type', 'application/json')});
    }

   getActiveKot(companyId, posId, stockPointId, stockPointDivId) {
    return this.httpClient.post(this._api+"/kot/active", {companyId:companyId, posId:posId, stockPointId:stockPointId, stockPointDivId:stockPointDivId},
    {headers:{'Content-Type': 'application/json' }});
   }

   getStockPointDiv(companyId){
    return this.httpClient.get(this._api+"/spd/"+companyId, {headers:{'Content-Type':'application/json'}});
   }

   updateKotQtyStatus(ktqIds, companyId, posId, status) {
    return this.httpClient.post(this._api+"/ktqupdate",{ktqIds:ktqIds, companyId:companyId, posId:posId, status:status},
    {headers:{'Content-Type':'application/json'}});
   }

   deliverKotItem(ktqIds:any) {
    return this.httpClient.post(this._api+"/kotdelivery",{ktqIds:ktqIds},
    {headers:{'Content-Type':'application/json'}});
   }
}
