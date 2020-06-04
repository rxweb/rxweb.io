import { OnInit, Component } from '@angular/core';
import * as Diff2Html from 'diff2html';
import * as Diff from 'diff'

@Component({
  templateUrl: './on-push.component.html',
})
export class ComparingOnPushComponent implements OnInit {

  rightSidebarLinks: any = [{ "id": "on-push", "title": "on-push", "subLink": null }, { "id": "on-push", "title": "on-push", "subLink": null }];
  outputHtml: string;

  ngOnInit() {
    this.init();
  }

  init() {
    let translocoContent: any = "export class OnPushComponent {\r\n\r\n  \r\n\r\n}"
    let rxwebTranslateContent: any = "export class OnPushComponent {\r\n\r\n    @translate() global: { [key: string]: any };\r\n\r\n}"

    var diff = Diff.createTwoFilesPatch("transloco", "@rxweb/translate", translocoContent, rxwebTranslateContent);

    let outputHtml = Diff2Html.html(diff, {
      drawFileList: false, matching: 'lines', outputFormat: 'side-by-side'
    });

    this.outputHtml = outputHtml;
    var nameTitle = this.outputHtml.substring(476, 525);
    // nameTitle = nameTitle += "<a>git</a>";
    // nameTitle = nameTitle.replace(nameTitle,nameTitle+="<a>git</a>")
    this.outputHtml = this.outputHtml.replace(nameTitle, nameTitle += '<span class="d2h-file-name float-comparison-right">@rxweb/ngx-translate-extension</span> <a class="pl-1" href="https://github.com/rxweb/rxweb/blob/master/client-side/angular/test/ngx-translate-extension/missing-translation-handler.spec.ts"><i class="fa fa-github" aria-hidden="true"></i></a>');
    var gitlink = this.outputHtml.substring(476, 525);
    this.outputHtml = this.outputHtml.replace(gitlink, gitlink += `<a class="pl-1" href="https://github.com/ngx-translate/core/blob/master/projects/ngx-translate/core/tests/missing-translation-handler.spec.ts"><i class="fa fa-github" aria-hidden="true"></i></a>`)

  }
}
