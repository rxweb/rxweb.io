import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import { json } from '@rxweb/reactive-form-validators';
import { Router } from '@angular/router';
declare const Prism;
declare const $;

@Component({
  selector: 'app-new-translate-code-display',
  templateUrl: './new-translate-code-display.component.html',
})
export class NewCodeDisplayComponent implements OnInit {

  @Input() item: any;
  @Input() innerHtml: string;
  @Input() exampleName: string;
  activeTab: string;
  json: any;
  html: any;
  ts: any;
  outputHtml: string;
  examples: any;
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    var fileName = this.router.url.split('/')[2];
    this.http.get<any[]>(`https://rxwebioassets.blob.core.windows.net/$web/json/generator/ngx-translate/${fileName}.json`).subscribe(res => {
      var data = res.filter(x => x.exampleName == this.exampleName);
      this.examples = data[0].exampleItems;
      this.activeTab = this.examples[0].fileName;
      this.examples.forEach(element => {
        element.fileContent = Prism.highlight(element.fileContent, Prism.languages['html'], 'html');
      });
    });
  }
}