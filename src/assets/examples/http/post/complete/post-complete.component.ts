import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';

@Component({
    selector: 'app-post-complete',
    templateUrl: './post-complete.component.html'
})
export class PostCompleteComponent {

    result: any;

    constructor(private userService : UserService){}

    Post() {
        this.userService.post({path:'api/Post', body: { firstName: "Cristine", lastName: 'Dave' } }).subscribe(res => {
            this.result = JSON.parse(JSON.stringify(res));
            this.result = JSON.parse(this.result.substr(14,56));
        })
    }
}