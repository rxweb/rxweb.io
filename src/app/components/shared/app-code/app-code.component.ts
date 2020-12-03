import { Component, Input, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { json } from '@rxweb/reactive-form-validators';
// import { } from 'src/assets/data/';
declare const Prism;
declare const $;

@Component({
  selector: 'app-code',
  templateUrl: './app-code.component.html',
})
export class AppCodeComponent implements OnInit {
  @Input() content: any;
  @Input() treeItems: Array<any>;
  @Input() scopeName: string;
  @Input() exampleName: string;
  routerData: any = [];

  items: any;
  isRouterDoc: boolean;
  contentItem: any = {};
  allContents: any[] = [];
  type: string;

  constructor(private http: HttpClient) {

    this.http.get('assets/json/router-examples.json').subscribe(
      res => {
        this.routerData = res;
        if (this.routerData) {
          var data = this.routerData.filter(x => x.content == this.content)
          if (data[0]) {
            this.isRouterDoc = data[0].isRouterDoc
          }
        }
      }
    )

    // this.http.get('assets/data/' + this.scopeName + '-translations.ts').subscribe(res => {
    // this.http.get(`assets/data/${this.scopeName}-translations.ts`).subscribe(res => {
    //   this.items = res;
    //   console.log(this.items)
    // })
  }

  ngOnInit() {

    this.type = typeof this.content;

    this.allContents = [];
    if (this.type == "object") {
      for (var prop in this.content) {
        this.contentItem = Object.assign({}, this.contentItem);
        if (this.content.hasOwnProperty(prop)) {
          this.contentItem['title'] = prop;
          this.contentItem['content'] = this.content[prop];
          this.allContents.push(this.contentItem);
        }
      }
    }

    // this.http.get('assets/data/async-translations.json').subscribe(res => {
    //   this.items = res['_body'];
    //   console.log(this.items);
    // })

    if (this.treeItems) {
      let item = this.treeItems.filter(t => t.active)[0]
      if (item) {
        this.showCode(item)
      }
    }
  }

  openStackblitz(content: any) {
    var routerLinkRedirectData = this.routerData.filter(x => x.content == content);
    var routerlinkRedirect = routerLinkRedirectData[0].link;
    window.open(`${routerlinkRedirect}`, "_blank");
  }

  hideActive(item: any) {
    item.active = false;
    if (item.childrens && item.childrens.length != 0) {

      item.childrens.forEach(elem => {
        this.hideActive(elem);
      })
    }
    else {
      item.active = false
    }
  }

  showCode(item: any) {
    const html = Prism.highlight(item.content, Prism.languages[item.contentType], item.contentType);
    if (html) {
      if (this.items) {
        this.items.forEach(element => {
          this.hideActive(element);
        });
      }
      else {
        this.treeItems.forEach(element => {
          element.active = false;
        });
      }
      item.active = true;
    }
    $(`#${this.scopeName}-code`).html(html)
    $(`#${this.scopeName}-link`).html(item.name)
  }
}

