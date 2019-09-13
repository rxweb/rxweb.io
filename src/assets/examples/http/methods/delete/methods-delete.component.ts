import { Component, OnInit } from '@angular/core';
import { HttpClientConfig, } from "@rxweb/http"
import { AppDomain } from '../base.component';
import { UserInfo } from './user.model';

@Component({
    selector: 'app-methods-delete',
    templateUrl: './methods-delete.component.html'
})
export class MethodsDeleteComponent extends AppDomain implements OnInit {

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

    Delete() {
        this.delete({ params: [1], body: { id: 2, firstName: "Srishti", lastName: 'Khandelwal' } }).subscribe(res => {
            this.result = res as UserInfo[];
            console.log(res);
        })
    }
}
