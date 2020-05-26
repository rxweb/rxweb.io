import { OnInit, Component } from '@angular/core';
declare const Prism;
declare const $;
@Component({
  templateUrl: './attribute-directive.component.html',
})
export class AttributeDirectiveComponent implements OnInit {

  rightSidebarLinks: any = [{ "id": "attribute-directive", "title": "Attribute Directive", "subLink": null }, { "id": "attribute-directive", "title": "Attribute Directive", "subLink": null }];
  outputHtml: string;
    examples: any = {
        first: {
            json: `{
"firstName":"Enter Your First Name"
}`,
            html: `<span translate="firstName"></span>`
        }
    }

    json: any;
    html: any;
    ngOnInit() {
        this.json = Prism.highlight(this.examples.first.json, Prism.languages['json'], 'json');
        this.html = Prism.highlight(this.examples.first.html, Prism.languages['html'], 'html');
  }

}
