import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';


@Component({
    selector: 'app-put-complete',
    templateUrl: './put-complete.component.html'
})
export class PutCompleteComponent implements OnInit {

    constructor(private userService:UserService){}
    result: any;

    ngOnInit() {
    }

    Put(id:number) {
        this.userService.put({path:'api/Put', params: [id], body: { firstName: "Cristine", lastName: 'Dave' } }).subscribe(res => {
            this.result = JSON.parse(JSON.stringify(res));
            this.result = JSON.parse(this.result.substr(14,56));
        })
    }
}

