import { Component, OnInit } from '@angular/core';

import { User } from './user.model';

@Component({
  selector: 'app-sanitizer-trim',
  templateUrl: './sanitizer-trim.component.html'
})

export class SanitizerTrimComponent implements OnInit {
  result: any;

  ngOnInit() {
    let user = new User();
    user.freeText = "abc"
    this.result = user.freeText;
  }
}
