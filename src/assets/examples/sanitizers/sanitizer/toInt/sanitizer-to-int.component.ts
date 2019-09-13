import { Component, OnInit } from '@angular/core';

import { User } from './user.model';

@Component({
  selector: 'app-sanitizer-toInt',
  templateUrl: './sanitizer-to-int.component.html'
})

export class SanitizerToIntComponent implements OnInit {

  result: any;
  ngOnInit() {
    let user = new User();
    user.amount = 16.50;
    this.result = user.amount;
  }
}
