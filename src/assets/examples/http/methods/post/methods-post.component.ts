import { Component, OnInit } from '@angular/core';
import { HttpClientConfig, } from "@rxweb/http"
import { AppDomain } from '../base.component';
import { UserInfo } from './user.model';

@Component({
    selector: 'app-methods-post',
    templateUrl: './methods-post.component.html'
})
export class MethodsPostComponent extends AppDomain implements OnInit {

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

    Post() {
        this.post({ params: [], body: { firstName: "Srishti", lastName: 'Khandelwal' } }).subscribe(res => {
            this.result = res as UserInfo[];
            console.log(res);
        })
    }
}
