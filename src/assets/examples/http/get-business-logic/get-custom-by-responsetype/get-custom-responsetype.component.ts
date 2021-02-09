import { Component, OnInit } from '@angular/core';
import { CustomByResponseService, UserList } from './get-custom-responsetype.service';

@Component({
    selector: 'app-get-custombyresponsetype',
    templateUrl: './get-custom-responsetype.component.html'
})
export class GetCustomByResponseTypeCompleteComponent implements OnInit  {
  constructor(private customByResponseService: CustomByResponseService){}
    result: any

    ngOnInit(){
        this.Get()
    }
    Get() {
        this.result = this.customByResponseService.GetAllUsers();
        this.result = UserList;        
    }
}
