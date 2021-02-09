import { Injectable } from "@angular/core";
import { http, RxHttp } from "@rxweb/http";

export var User;
@http({
    path: "api/GetById",
})
@Injectable({
    providedIn: 'root'
})
export class CustomGetByIdService extends RxHttp {
    fullName:string;

    constructor() {
        super();

    }

    GetUserById(id) {
        return this.get({params:[id]}).subscribe(response => {
            User =  response;
            User = JSON.parse(User)
        })
    }

}