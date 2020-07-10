import { Component, OnInit } from '@angular/core';

import { User } from './user.model';

@Component({
  selector: 'app-sanitizer-escape',
  templateUrl: './sanitizer-escape.component.html'
})

export class SanitizerEscapeComponent implements OnInit {
  result: any;
  
  ngOnInit() {
    let user = new User();
    user.freeText = "xyzabc$&";
    this.result = user.freeText;
  }
}
