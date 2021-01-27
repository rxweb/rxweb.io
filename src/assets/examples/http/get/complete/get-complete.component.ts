import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';
@Component({
    selector: 'app-get-complete',
    templateUrl: './get-complete.component.html'
})
export class GetCompleteComponent  {
  constructor(private userService : UserService){}
    result: any

    Get() {
        this.userService.get({path:'api/Get'}).subscribe(res => {
            this.result = res;
            this.result = JSON.parse(this.result);
        })
    }
}
