import { Component, OnInit } from '@angular/core';

import { BaseComponent } from '../base.component';

@Component({
    selector: 'app-patch-complete',
    templateUrl: './patch-complete.component.html'
})
export class PatchCompleteComponent extends BaseComponent implements OnInit {

    result: any;

    ngOnInit() {
     this.Patch(2);   
    }

    Patch(id:number) {
        this.patch({params: [id], body: { firstName: "Srishti", } }).subscribe(res => {
            this.result = res;
        })
    }
}