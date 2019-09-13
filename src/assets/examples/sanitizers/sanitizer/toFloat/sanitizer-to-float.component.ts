import { Component, OnInit } from '@angular/core';

import { User } from './user.model';

@Component({
  selector: 'app-sanitizer-toFloat',
  templateUrl: './sanitizer-to-float.component.html'
})

export class SanitizerToFloatComponent implements OnInit {
  result: any;

  ngOnInit() {
    let user = new User();
    user.amount = 16.50;
    this.result = user.amount;
  }
}
