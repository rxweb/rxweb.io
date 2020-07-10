import { Component, OnInit } from '@angular/core';

import { BaseComponent } from '../base.component';

@Component({
    selector: 'app-delete-complete',
    templateUrl: './delete-complete.component.html'
})
export class DeleteCompleteComponent extends BaseComponent implements OnInit {

    result: any;

    ngOnInit() {
    this.Delete(2);   
    }

    Delete(id:number) {
        this.delete({ params: [id], body: { firstName: "Srishti", lastName: 'Khandelwal' } }).subscribe(res => {
        this.result = res;
        })
    }
}