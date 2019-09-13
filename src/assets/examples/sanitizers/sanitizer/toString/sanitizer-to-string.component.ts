import { Component, OnInit } from '@angular/core';

import { User } from './user.model';

@Component({
  selector: 'app-sanitizer-toString',
  templateUrl: './sanitizer-to-string.component.html'
})

export class SanitizerToStringComponent implements OnInit {
  result: any;

  ngOnInit() {
    let user = new User();
    user.freeText = "abc";
    this.result = user.freeText;
  }
}
