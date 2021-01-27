import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';


@Component({
    selector: 'app-patch-complete',
    templateUrl: './patch-complete.component.html'
})
export class PatchCompleteComponent  {

    result: any;
  
    constructor(private userService: UserService){}

    Patch(id:number) {
        this.userService.patch({path:'api/Patch', params: [2], body: { firstName: "Cristine", } }).subscribe(res => {
            this.result = JSON.parse(JSON.stringify(res));
            this.result = JSON.parse(this.result.substr(14,56));
        })
    }
}

