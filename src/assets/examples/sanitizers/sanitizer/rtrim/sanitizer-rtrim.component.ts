import { Component, OnInit } from '@angular/core';

import { User } from './user.model';

@Component({
  selector: 'app-sanitizer-rtrim',
  templateUrl: './sanitizer-rtrim.component.html'
})

export class SanitizerRtrimComponent implements OnInit {
  result: any;
  
  ngOnInit() {
    let user = new User();
    user.freeText = "gmail";
    this.result = user.freeText;
  }
}
