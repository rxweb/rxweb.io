import { Component, OnInit } from '@angular/core';

import { User } from './user.model';

@Component({
  selector: 'app-sanitizer-whitelist',
  templateUrl: './sanitizer-whitelist.component.html'
})

export class SanitizerWhitelistComponent implements OnInit {
  result: any;

  ngOnInit() {
    let user = new User();
    user.freeText = "abc";
    this.result = user.freeText;
  }
}
