
import { Injectable } from "@angular/core";
import { http, RxHttp } from "@rxweb/http";

@http({
    hostKey: "local",
    path: "",
})
@Injectable({
    providedIn: 'root'
})
export class UserService extends RxHttp  {
   
     constructor() {
        super();
       
    }
}

