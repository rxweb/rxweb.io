import { Component, OnInit } from '@angular/core';
import { HttpClientConfig, } from "@rxweb/http"
import { UserInfo } from './user.model';
import { BaseComponent } from '../../decorators/http/base.component';

@Component({
    selector: 'app-methods-post',
    templateUrl: './methods-post.component.html'
})
export class MethodsPostComponent extends BaseComponent implements OnInit {

    result: UserInfo[]

    ngOnInit() {

   
    }

    Post() {
        // this.post({ params: [], body: { firstName: "Srishti", lastName: 'Khandelwal' } }).subscribe(res => {
        //     this.result = res as UserInfo[];
        //     console.log(res);
        // })
    }
}
