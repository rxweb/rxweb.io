import { Component, OnInit } from '@angular/core';

import { BaseComponent } from '../base.component';



@Component({
    selector: 'app-post-complete',
    templateUrl: './post-complete.component.html'
})
export class PostCompleteComponent extends BaseComponent implements OnInit {

    result: any;

    ngOnInit() {
     this.Post();   
    }

    Post() {
        this.post({ body: { firstName: "Srishti", lastName: 'Khandelwal' } }).subscribe(res => {
            this.result = res;
        })
    }
}