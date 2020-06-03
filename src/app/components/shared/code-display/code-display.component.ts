import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import { json } from '@rxweb/reactive-form-validators';
// import { } from 'src/assets/data/';
declare const Prism;
declare const $;

@Component({
  selector: 'app-code-display',
  templateUrl: './code-display.component.html',
})
export class CodeDisplayComponent implements OnInit {

  @Input() item: any;
  @Input() innerHtml: string;

  json: any;
  html: any;
  ts: any;
  outputHtml: string;

  ngOnInit() {
    if (this.innerHtml == 'json')
      this.outputHtml = Prism.highlight(this.item.json, Prism.languages['json'], 'json');
    else if (this.innerHtml == 'typescript')
      this.outputHtml = Prism.highlight(this.item.typescript, Prism.languages['typescript'], 'typescript');
    else if (this.innerHtml == 'ts')
      if (this.item.ts.service)
        this.outputHtml = Prism.highlight(this.item.ts.service, Prism.languages['ts'], 'ts');
      else if (this.item.ts.module)
        this.outputHtml = Prism.highlight(this.item.ts.module, Prism.languages['ts'], 'ts');
      else
        this.outputHtml = Prism.highlight(this.item.ts, Prism.languages['ts'], 'ts');
    else
      this.outputHtml = Prism.highlight(this.item.html, Prism.languages['html'], 'html');
  }
}