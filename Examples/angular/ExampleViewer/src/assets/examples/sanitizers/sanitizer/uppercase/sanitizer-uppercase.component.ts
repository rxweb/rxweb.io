import { Component, OnInit } from '@angular/core';

import { User } from './user.model';

@Component({
  selector: 'app-sanitizer-uppercase',
  templateUrl: './sanitizer-uppercase.component.html'
})

export class SanitizerUppercaseComponent implements OnInit {
  result: any;

  ngOnInit() {
    let user = new User();
    user.freeText = "abc"
    this.result = user.freeText;
  }
}
