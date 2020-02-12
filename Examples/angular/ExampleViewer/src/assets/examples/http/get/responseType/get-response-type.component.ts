import { Component, OnInit } from '@angular/core';

import { BaseComponent } from './base.component';

@Component({
    selector: 'app-get-responseType',
    templateUrl: './get-response-type.component.html'
})
export class GetResponseTypeComponent extends BaseComponent implements OnInit {

    result: any

    ngOnInit() {
      this.GetByResponseType(); 
    }

    GetByResponseType() {
        this.get({responseType:"text"}).subscribe(res => {
            this.result = res;
        })
    }

}
