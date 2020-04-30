import { Component, Input, OnInit } from '@angular/core';
declare const Prism;
declare const $;

@Component({
  selector: 'app-code',
  templateUrl: './app-code.component.html',
})
export class AppCodeComponent implements OnInit {
  @Input() content: any;
  @Input() treeItems: Array<any>;
  @Input() items: Array<any>;
  @Input() scopeName: string;

  contentItem: any = {};
  allContents: any[] = [];
  type: string;

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
    if (this.treeItems) {
      let item = this.treeItems.filter(t => t.active)[0]
      if (item) {
        this.showCode(item)
      }
    }
  }

  hideActive(item: any) {
    item.active = false;
    if (item.childrens) {
      item.childrens.forEach(element => {
        this.hideActive(element);
      })
    }
  }

  showCode(item: any) {
    const html = Prism.highlight(item.content, Prism.languages[item.contentType], item.contentType);
    if (html) {
      this.items.forEach(element => {
        this.hideActive(element);
      });
      item.active = true;
    }
    $(`#${this.scopeName}-code`).html(html)
    $(`#${this.scopeName}-link`).html(item.name)
  }
}

