import { Component, OnInit } from '@angular/core';
import { HttpClientConfig, RxHttp, http } from "@rxweb/http";
import { UserInfo } from './user.model';

@Component({
    selector: 'app-decorators-http',
    templateUrl: './decorators-http.component.html'
})
@http({
    hostKey: "local",
    path: "posts",
})
export class DecoratorsHttpComponent extends RxHttp implements OnInit {

    result: UserInfo[]

    ngOnInit() {
    
        HttpClientConfig.register({
            hostURIs: [{
                name: 'local',
                default: true,
                uri: 'http://localhost:3005'
            }],
            filters: [],
            onError: (r) => { console.log(r) },
            isProductionEnvironment: false
        })
    
    }

    Get() {
        this.get({}).subscribe(res => {
            this.result = res as UserInfo[];
            console.log(res);
        })
    }

    Post() {
        this.post({ params: [], body: { firstName: "Srishti", lastName: 'Khandelwal', department: 'Dotnet' } }).subscribe(res=>{
            console.log(res);
        })
    }

    Put() {
        this.put({ params: [1], body: { firstName: "Srishti", lastName: 'Khandelwal', department: 'Dotnet' } }).subscribe(res=>{
            console.log(res);
        })
    }

    Patch() {
        this.patch({ params: [1], body: { firstName: "Srishti", } }).subscribe(res => {
            console.log(res);
        })
    }

    Delete() {
        this.delete({ params: [1], body: { id: 2 } }).subscribe(res => {
            console.log(res);
        })
    }

}
