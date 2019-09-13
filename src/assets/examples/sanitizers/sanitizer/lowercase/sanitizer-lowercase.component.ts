import { Component, OnInit } from '@angular/core';

import { User } from './user.model';

@Component({
  selector: 'app-sanitizer-lowercase',
  templateUrl: './sanitizer-lowercase.component.html'
})

export class SanitizerLowercaseComponent implements OnInit {
  result: any;

  ngOnInit() {
    let user = new User();
    user.freeText = "ABC"
    this.result = user.freeText;
  }
}