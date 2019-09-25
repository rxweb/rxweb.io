import { Component, OnInit } from '@angular/core';
import { HttpClientConfig, } from "@rxweb/http"
import { BaseComponent } from '../base.component';
import { UserInfo } from './user.model';

@Component({
    selector: 'app-methods-put',
    templateUrl: './methods-put.component.html'
})
export class MethodsPutComponent extends BaseComponent implements OnInit {

    result: UserInfo[]

    ngOnInit() {

    
    }

    Put() {
        // this.put({ params: [1], body: { firstName: "Srishti", lastName: 'Khandelwal' } }).subscribe(res => {
        //     this.result = res as UserInfo[];
        //     console.log(res);
        // })
    }
}
