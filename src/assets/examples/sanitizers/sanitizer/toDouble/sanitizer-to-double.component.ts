import { Component, OnInit } from '@angular/core';

import { User } from './user.model';

@Component({
  selector: 'app-sanitizer-toDouble',
  templateUrl: './sanitizer-to-double.component.html'
})

export class SanitizerToDoubleComponent implements OnInit {

  result: any;
  ngOnInit() {
    let user = new User();
    user.amount = 16.50;
    this.result = user.amount;
  }
}
