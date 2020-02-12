import { Component, OnInit } from '@angular/core';

import { User } from './user.model';

@Component({
  selector: 'app-sanitizer-toBoolean',
  templateUrl: './sanitizer-to-boolean.component.html'
})

export class SanitizerToBooleanComponent implements OnInit {

  result: any;
  ngOnInit() {
    let user = new User();
    user.name  = "gmail";
    this.result = user.name;
  }
}
