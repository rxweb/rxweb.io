import { Component, OnInit } from '@angular/core';
import { List } from '@rxweb/generics';

import { UserModel } from './user.model';

@Component({
  selector: 'app-list-concat',
  templateUrl: './list-concat.component.html'
})

export class ListConcatComponent implements OnInit {
    result:any;
    items: List<UserModel> = new List<UserModel>([{ name: 'John' },{name:"David"}]);

   ngOnInit() {
    this.result = this.items.concat([{"name":"John"},{"name":"David"}]);
  }  
}