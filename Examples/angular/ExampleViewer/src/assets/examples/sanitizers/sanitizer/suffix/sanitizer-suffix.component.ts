import { Component, OnInit } from '@angular/core';

import { User } from './user.model';

@Component({
  selector: 'app-sanitizer-suffix',
  templateUrl: './sanitizer-suffix.component.html'
})
export class SanitizerSuffixComponent implements OnInit {

  result: any;
  ngOnInit() {
    let user = new User();
    user.freeText = "gmail";
    this.result = user.freeText;
  }
}
