import { Component, OnInit } from '@angular/core';
import { List } from '@rxweb/generics';

import { UserModel } from './user.model';

@Component({
  selector: 'app-list-where',
  templateUrl: './list-where.component.html'
})

export class ListWhereComponent implements OnInit {
    result:any;
    items: List<UserModel> = new List<UserModel>([{ name: 'John' },{name:"David"}]);

    ngOnInit() {
    this.result = this.items.where(x=>x.name == "John");
  }  
}   