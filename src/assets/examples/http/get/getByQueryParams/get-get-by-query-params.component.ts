import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';

@Component({
    selector: 'app-get-getByQueryParams',
    templateUrl: './get-get-by-query-params.component.html'
})
export class GetGetByQueryParamsComponent  {

    constructor(private userService: UserService){}    
    result: any

    GetByQueryParams(firstName?:string) {
        this.userService.get({path:'api/GetByQueryParams', queryParams:['Cristine']}).subscribe(res => {
            this.result = res;
            this.result = JSON.parse(this.result);
        })
    }
}
