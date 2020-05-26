import { OnInit, Component } from '@angular/core';

@Component({
  templateUrl: './pipe.component.html',
})
export class PipeComponent implements OnInit {

  rightSidebarLinks: any = [{ "id": "pipe", "title": "Pipe", "subLink": null }, { "id": "pipe", "title": "Pipe", "subLink": null }];
  outputHtml: string;

  ngOnInit() {

  }

}