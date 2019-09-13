import { Component, OnInit } from '@angular/core';
import { List } from '@rxweb/generics';

import { UserModel } from './user.model';

@Component({
  selector: 'app-list-aggregate',
  templateUrl: './list-aggregate.component.html'
})
export class ListAggregateComponent implements OnInit {
    result:any;
     items: List<UserModel> = new List<UserModel>([{ name: 'John' }]);

   ngOnInit() {
   // this.items.aggregate({ name: 'John' });
  }  
}