import { Component, OnInit } from '@angular/core';
import { List } from '@rxweb/generics';

import { UserModel } from './user.model';

@Component({
  selector: 'app-list-any',
  templateUrl: './list-any.component.html'
})

export class ListAnyComponent implements OnInit {
    result:any;
     items: List<UserModel> = new List<UserModel>([{ name: 'John' },{name:"David"}]);

   ngOnInit() {
    this.result = this.items.any(x=>x.name.startsWith("J"));
  }  
}