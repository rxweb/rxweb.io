import { Component, OnInit } from '@angular/core';
import { List } from '@rxweb/generics';

import { UserModel } from './user.model';

@Component({
  selector: 'app-list-singleOrDefault',
  templateUrl: './list-single-or-default.component.html'
})

export class ListSingleOrDefaultComponent implements OnInit {
    result:any;  
    items: List<UserModel> = new List<UserModel>([{ grades: 68 },{grades:89},{grades:30},{grades:90}]);

   ngOnInit() {
    this.result = this.items.singleOrDefault(x=>x.grades == 68);
  }  
}