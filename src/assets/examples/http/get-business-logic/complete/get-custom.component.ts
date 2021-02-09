import { Component, OnInit } from '@angular/core';
import { UsersService, UserList } from './users.service';
@Component({
    selector: 'app-get-custom',
    templateUrl: './get-custom.component.html'
})
export class GetCustomCompleteComponent implements OnInit  {
  constructor(private userService: UsersService){}
    result: any

    ngOnInit(){
        this.Get();
    }
    Get() {    
        this.userService.GetAllUsers();
        this.result = UserList;
    }
}
