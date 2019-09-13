import { Component, OnInit } from '@angular/core';
import { List } from '@rxweb/generics';

import { UserModel } from './user.model';

@Component({
  selector: 'app-list-addRange',
  templateUrl: './list-add-range.component.html'
})
export class ListAddRangeComponent implements OnInit {
    result:any;
     items: List<UserModel> = new List<UserModel>([{ name: 'John' }]);

   ngOnInit() {
    this.items.addRange([{name:"Bharat"},{name:"David"}]);
  }  
}
