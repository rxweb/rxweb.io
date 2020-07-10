import { Component, OnInit } from '@angular/core';

import { BaseComponent } from '../base.component';


@Component({
    selector: 'app-put-complete',
    templateUrl: './put-complete.component.html'
})
export class PutCompleteComponent extends BaseComponent implements OnInit {

    result: any;

    ngOnInit() {
     this.Put(2);   
    }

    Put(id:number) {
        this.put({params: [id], body: { firstName: "Srishti", lastName: 'Khandelwal' } }).subscribe(res => {
            this.result = res
        })
    }
}