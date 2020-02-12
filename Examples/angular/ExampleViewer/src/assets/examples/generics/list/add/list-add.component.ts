import { Component, OnInit } from '@angular/core';
import { List } from '@rxweb/generics';

import { UserModel } from './user.model';

@Component({
  selector: 'app-list-add',
  templateUrl: './list-add.component.html'
})
export class ListAddComponent implements OnInit {
    result:any;
     items: List<UserModel> = new List<UserModel>([{ name: 'John' }]);

   ngOnInit() {
    this.items.add({name:"Bharat"});
  }  
}
