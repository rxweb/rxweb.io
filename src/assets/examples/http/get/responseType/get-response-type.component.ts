import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';

@Component({
    selector: 'app-get-responseType',
    templateUrl: './get-response-type.component.html'
})
export class GetResponseTypeComponent {

    constructor(private userService:UserService){}
    result: any

    GetByResponseType() {
        this.userService.get({path:'api/GetByResponseType', responseType:"text"}).subscribe(res => {
            this.result = res;
            this.result = JSON.parse(this.result);
        })
    }
}
