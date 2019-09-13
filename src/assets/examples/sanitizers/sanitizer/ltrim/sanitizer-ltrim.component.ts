import { Component, OnInit } from '@angular/core';

import { User } from './user.model';

@Component({
  selector: 'app-sanitizer-ltrim',
  templateUrl: './sanitizer-ltrim.component.html'
})

export class SanitizerLtrimComponent implements OnInit {
  result: any;
  
  ngOnInit() {
    let user = new User();
    user.freeText  = "gmail";
    this.result = user.freeText;
  }
}
