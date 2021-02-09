import { Injectable } from "@angular/core";
import { http, RxHttp } from "@rxweb/http";

export var UserList: any ;
@http({
    hostKey: "local",
    path: "api/GetBusinessLogic",
})
@Injectable({
    providedIn: 'root'
})
export class CustomByResponseService extends RxHttp {
 
    constructor() {
        super();

    }

    GetAllUsers() {
        return this.get({responseType:'text'}).subscribe(response => {
            UserList = response;
            UserList =  JSON.parse(UserList).filter(x => x.isActive == true)            
        })
    }

}
