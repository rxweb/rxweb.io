import { Component, OnInit } from '@angular/core';
import { HttpClientConfig, } from "@rxweb/http"
import { AppDomain } from '../base.component';
import { UserInfo } from './user.model';

@Component({
    selector: 'app-methods-put',
    templateUrl: './methods-put.component.html'
})
export class MethodsPutComponent extends AppDomain implements OnInit {

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

    Put() {
        this.put({ params: [1], body: { firstName: "Srishti", lastName: 'Khandelwal' } }).subscribe(res => {
            this.result = res as UserInfo[];
            console.log(res);
        })
    }
}
