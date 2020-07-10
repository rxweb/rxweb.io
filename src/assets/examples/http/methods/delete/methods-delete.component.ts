import { Component, OnInit } from '@angular/core';
import { HttpClientConfig, } from "@rxweb/http"
import {  BaseComponent } from '../base.component';
import { UserInfo } from './user.model';

@Component({
    selector: 'app-methods-delete',
    templateUrl: './methods-delete.component.html'
})
export class MethodsDeleteComponent extends BaseComponent implements OnInit {

    result: UserInfo[]

    ngOnInit() {

    }

    Delete() {
        // this.delete({ params: [1], body: { id: 2, firstName: "Srishti", lastName: 'Khandelwal' } }).subscribe(res => {
        //     this.result = res as UserInfo[];
        //     console.log(res);
        // })
    }
}
