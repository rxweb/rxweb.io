import { ElementRef, Component, OnChanges, SimpleChanges, OnInit, Input } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { HttpClient, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { PageViewerComponent } from "src/app/components/shared/page-viewer/page-viewer.component";
import { ActivatedRoute } from "@angular/router";
import { environment } from 'src/environments/environment';
import { ApplicationBroadcaster } from '@rx/core';

@Component({
  templateUrl: './text-page.component.html',
  entryComponents: [PageViewerComponent],
})
export class TextPageComponent implements OnInit {
  showComponent: boolean = false;
  options: any = { responseType: 'text' };
  codeContent: any = "";
  validationName: string;
  mainType: string;
  rightSidebarLinks:any;
  constructor(
    private http: HttpClient,private router : Router,
    private applicationBroadcaster:ApplicationBroadcaster
  ) {
    this.applicationBroadcaster.topSubject.subscribe(t=>{
      this.rightSidebarLinks = t.rightSidebarLinks;
    })
  }
  ngOnInit(): void {
    this.bind();
    this.showComponent = true;
  }

  bind() {
    let splitedArray = this.router.url.split('/');
    this.mainType = splitedArray[1];
    this.validationName = splitedArray[2];
     let codeUri = 'assests/json/generator/contributing/decorators.json?v=' + environment.appVersion;
     if(this.validationName !== undefined)
       codeUri = 'https://rxwebioassets.blob.core.windows.net/$web/json/generator/' + this.validationName + '/decorators.json?v=' + environment.appVersion;
     else
       if(this.mainType == 'changelog')
        codeUri = 'https://rxwebioassets.blob.core.windows.net/$web/json/generator/CHANGELOG/decorators.json?v=' + environment.appVersion;
    this.http.get(codeUri, this.options).subscribe(response => {
        this.codeContent = JSON.parse(response.toString());
        var element = document.getElementById("mainContent")
        element.innerHTML = this.codeContent.htmlContent;
        document.title = this.codeContent.title + " - RxWeb Docs";
        this.applicationBroadcaster.topSubject.next(this.codeContent);
    });

  }

  scrollTo(section) {
    window.location.hash = section;
  }
}
