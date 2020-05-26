import { OnInit, Component } from '@angular/core';

@Component({
  templateUrl: './confidence.component.html',
})
export class ConfidenceComponent implements OnInit {

  rightSidebarLinks: any = [{ "id": "confidence", "title": "Confidence", "subLink": null }, { "id": "confidence", "title": "Confidence", "subLink": null }];
  outputHtml: string;

  ngOnInit() {

  }

}