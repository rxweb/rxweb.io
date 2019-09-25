import { Component, OnInit } from '@angular/core';
import { HttpClientConfig, } from "@rxweb/http"
import { UserInfo } from './user.model'
import { BaseComponent } from '../../decorators/http/base.component';

@Component({
    selector: 'app-methods-patch',
    templateUrl: './methods-patch.component.html'
})
export class MethodsPatchComponent extends BaseComponent implements OnInit {

    result: UserInfo[]

    ngOnInit() {

    }

    Patch() {
        // this.patch({ params: [1], body: { firstName: "Srishti", } }).subscribe(res => {
        //     this.result = res as UserInfo[];
        //     console.log(res);
        // })
    }
    
}
