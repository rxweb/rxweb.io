import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
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

  items: any;
  isRouterDoc:boolean;
  contentItem: any = {};
  allContents: any[] = [];
  type: string;

  constructor(private http: Http) {
    // this.http.get('assets/data/' + this.scopeName + '-translations.ts').subscribe(res => {
    // this.http.get(`assets/data/${this.scopeName}-translations.ts`).subscribe(res => {
    //   this.items = res;
    //   console.log(this.items)
    // })
  }

  ngOnInit() {
    this.type = typeof this.content;
    if(location.pathname.includes("angular-router")){
    this.isRouterDoc = true;
  }
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

