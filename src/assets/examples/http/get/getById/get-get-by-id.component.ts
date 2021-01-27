import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';

@Component({
    selector: 'app-get-getById',
    templateUrl: './get-get-by-id.component.html'
})
export class GetGetByIdComponent {

    constructor(private userService: UserService){}

    result: any

    GetById(id:number) {
        this.userService.get({path:'api/GetById/2'}).subscribe(res => {
            this.result = res;
            this.result = JSON.parse(this.result);
        })
    }

}
