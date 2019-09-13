import { Component, OnInit } from '@angular/core';

import { User } from './user.model';

@Component({
  selector: 'app-sanitizer-blacklist',
  templateUrl: './sanitizer-blacklist.component.html'
})

export class SanitizerBlacklistComponent implements OnInit {
  result: any;

  ngOnInit() {
    let user = new User();
    user.freeText = "xyzabc";
    this.result = user.freeText;
  }
}
