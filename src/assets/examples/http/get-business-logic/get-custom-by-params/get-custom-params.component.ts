import { Component, OnInit } from '@angular/core';
import { CustomByParamsService, users } from './get-custom.service';

@Component({
    selector: 'app-get-customgetByParams',
    templateUrl: './get-custom-params.component.html'
})
export class GetCustomParamsComponent implements OnInit {

    constructor(private customByParamsService: CustomByParamsService){}

    result: any

    ngOnInit(){
        this.GetByQueryParams();
    }
    GetByQueryParams(startLetter?:number) {
        this.result = this.customByParamsService.GetUserByParams(startLetter);  
        this.result = users;
    }

}