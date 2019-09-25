import { Component, OnInit } from '@angular/core';

import { BaseComponent } from '../base.component';

@Component({
    selector: 'app-get-getByQueryParams',
    templateUrl: './get-get-by-query-params.component.html'
})
export class GetGetByQueryParamsComponent extends BaseComponent implements OnInit {

    result: any

    ngOnInit() {
      this.GetByQueryParams('Srishti');
    }

    GetByQueryParams(firstName:string) {
        this.get({queryParams:[firstName]}).subscribe(res => {
            this.result = res;
        })
    }

}
