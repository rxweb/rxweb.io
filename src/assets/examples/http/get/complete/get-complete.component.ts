import { Component, OnInit } from '@angular/core';
import { BaseComponent } from './base.component';

@Component({
    selector: 'app-get-complete',
    templateUrl: './get-complete.component.html'
})
export class GetCompleteComponent extends BaseComponent implements OnInit {

    result: any

    ngOnInit() {
      this.Get();
    }

    Get() {
        this.get().subscribe(res => {
            this.result = res;
        })
    }

}
