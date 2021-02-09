import { Component, OnInit } from '@angular/core';
import { CustomGetByIdService,User } from './get-custom.service';


@Component({
    selector: 'app-get-customgetById',
    templateUrl: './get-custom-by-id.component.html'
})
export class GetCustomByIdComponent implements OnInit {

    constructor(private customGetByIdService: CustomGetByIdService){}

    result: any

    ngOnInit(){
        this.GetById(2);
    }
    GetById(id:number) {
        this.result = this.customGetByIdService.GetUserById(id);
        this.result = User;   
    }
}
