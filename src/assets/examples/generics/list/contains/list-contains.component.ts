import { Component, OnInit } from '@angular/core';
import { List } from '@rxweb/generics';

import { UserModel } from './user.model';

@Component({
  selector: 'app-list-contains',
  templateUrl: './list-contains.component.html'
})

export class ListContainsComponent implements OnInit {
    result:any;
    items: List<UserModel> = new List<UserModel>([{ name: 'John' },{name:"David"}]);

   ngOnInit() {
    this.result = this.items.contains(x=>x.name == "John");
  }  
}