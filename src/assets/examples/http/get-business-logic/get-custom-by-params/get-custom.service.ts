import { Injectable } from "@angular/core";
import { http, RxHttp } from "@rxweb/http";

export var users: any;
@http({
    path: "api/GetByQueryParams",
})
@Injectable({
    providedIn: 'root'
})
export class CustomByParamsService extends RxHttp {

    constructor() {
        super();

    }

    GetUserByParams(queryParams:any) {
        return this.get().subscribe(response => {
             users = response;
            users = JSON.parse(users)
             users = users[0].filter(x=>x['firstName'].startsWith("J"))
           
        })
    }

}