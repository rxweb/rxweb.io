import { Component, OnInit } from '@angular/core';
import { List } from '@rxweb/generics';

import { UserModel } from './user.model';

@Component({
  selector: 'app-list-all',
  templateUrl: './list-all.component.html'
})
export class ListAllComponent implements OnInit {
    result:any;
     items: List<UserModel> = new List<UserModel>([{ name: 'John' },{name:"David"}]);

   ngOnInit() {
    this.result = this.items.all(x=>x.name.startsWith("J"));
  }  
}