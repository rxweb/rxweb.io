import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';

@Component({
    selector: 'app-delete-complete',
    templateUrl: './delete-complete.component.html'
})
export class DeleteCompleteComponent {

    result: any;

    constructor(private userService : UserService){}

    Delete(id:number) {
        this.userService.delete({ path:'api/Delete', params: [id], body: { firstName: "Srishti", lastName: 'Khandelwal' } }).subscribe(res => {
        this.result = res;
        })
    }
}