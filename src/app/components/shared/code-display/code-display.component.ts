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
    console.log(this.innerHtml)
    if (this.innerHtml == 'json')
      this.outputHtml = Prism.highlight(this.item.json, Prism.languages['json'], 'json');
    else if (this.innerHtml == 'typescript')
      this.outputHtml = Prism.highlight(this.item.typescript, Prism.languages['typescript'], 'typescript');
    else
      this.outputHtml = Prism.highlight(this.item.html, Prism.languages['html'], 'html');
  }
}