import { Component, OnInit } from '@angular/core';

import { BaseComponent } from './base.component';

@Component({
    selector: 'app-get-getById',
    templateUrl: './get-get-by-id.component.html'
})
export class GetGetByIdComponent extends BaseComponent implements OnInit {

    result: any

    ngOnInit() {
      this.GetById(2);
    }

    GetById(id:number) {
        this.get({params:[id]}).subscribe(res => {
            this.result = res;
        })
    }

}
