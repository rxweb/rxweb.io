import { Component, OnInit } from '@angular/core';
import { HttpClientConfig } from "@rxweb/http"
import { AppDomain } from '../base.component';
import { UserInfo } from './user.model'

@Component({
    selector: 'app-methods-get',
    templateUrl: './methods-get.component.html'
})
export class MethodsGetComponent extends AppDomain implements OnInit {

    result: UserInfo[]

    ngOnInit() {
    
        HttpClientConfig.register({
            hostURIs: [{
                name: 'local',
                default: true,
                uri: 'http://localhost:3004'
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

}
