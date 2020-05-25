import { OnInit, Component } from '@angular/core';

@Component({
  templateUrl: './decorator.component.html',
})
export class DecoratorComponent implements OnInit {

  rightSidebarLinks: any = [{ "id": "decorator", "title": "Decorator", "subLink": null }, { "id": "decorator", "title": "Decorator", "subLink": null }];
  outputHtml: string;

  ngOnInit() {

  }

}