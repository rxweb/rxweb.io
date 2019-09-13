import { Component, OnInit } from '@angular/core';

import { User } from './user.model';

@Component({
  selector: 'app-sanitizer-prefix',
  templateUrl: './sanitizer-prefix.component.html'
})

export class SanitizerPrefixComponent implements OnInit {
  result: any;
  
  ngOnInit() {
    let user = new User();
    user.freeText = "gmail.com"
    this.result = user.freeText;
  }
}
