import { ElementRef, Component, OnChanges, SimpleChanges, OnInit, Input } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { HttpClient, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { PageViewerComponent } from "src/app/components/shared/page-viewer/page-viewer.component";
import { ActivatedRoute } from "@angular/router";
import { environment } from 'src/environments/environment';
import { ApplicationBroadcaster } from '@rx/core';

@Component({
  templateUrl: './html.page.component.html',
  entryComponents: [PageViewerComponent],
})
export class HtmlPageComponent implements OnInit {
  links: any;
  showComponent: boolean = false;
  options: any = { responseType: 'text' };
  codeContent: any = "";
  validationName: string;
  mainType: string;
  rightSidebarLinks: any;
  rootFolder: string;
  fileName: string;
  nestedFolder: string;
  childFolder: string;
  isNotFirstTime: boolean;
  constructor(
    private http: HttpClient,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private applicationBroadcaster: ApplicationBroadcaster
  ) {
    this.applicationBroadcaster.topSubject.subscribe(t => {
      this.rightSidebarLinks = t.rightSidebarLinks;
    })
    this.activatedRoute.params.subscribe(t => {
      this.rootFolder = t["rootFolder"];
      this.fileName = t["fileName"];
      this.nestedFolder = t["nestedFolder"];
      this.childFolder = t["childFolder"];
      if (this.isNotFirstTime)
        this.bind()
      this.isNotFirstTime = true;
    })
  }
  ngOnInit(): void {
    this.http.get('assets/json/rxwebcore-sidebar.json?v=' + environment.appVersion).subscribe((response: any) => {
      this.links = response;
    });
    this.bind();
    this.showComponent = true;
  }

  getUri() {

    let uri: string = 'assets/json/generator/rx-web-core';
    if (this.rootFolder)
      uri += `/${this.rootFolder}`;
    if (this.nestedFolder)
      uri += `/${this.nestedFolder}`;
    if (this.childFolder)
      uri += `/${this.childFolder}`;
    if (this.fileName)
      uri += `/${this.fileName}`;
    return `${uri}/html.json?v=${environment.appVersion}`;
  }

  bind() {

    let codeUri = this.getUri();
    this.http.get(codeUri, this.options).subscribe(response => {
      this.codeContent = JSON.parse(response.toString());
      var element = document.getElementById("mainContent")
      element.innerHTML = this.codeContent.htmlContent;
      document.title = "rxweb " + this.codeContent.title
      this.applicationBroadcaster.topSubject.next(this.codeContent);
    });

  }

  nextLink() {
    debugger;
    
   var currentIndex = this.links.links.array.forEach(element => {
     element.childrens.filter(a=>a.path == location.pathname.split('/')[1]);
   });

    if (location.hash) {
      var currentLocation = location.pathname + location.hash;
      var currentObjIndex = this.links.links[currentIndex].childrens.findIndex(a => a.href == currentLocation);
    }
    else {
      var currentObjIndex = this.links.links[currentIndex].childrens.findIndex(a => a.href == location.pathname);
    }
    currentObjIndex++;

    var nextObject = this.links.links[currentIndex].childrens[currentObjIndex];
    if (nextObject) {
      if (nextObject.href)
        var tree = this.router.parseUrl(nextObject.href);
      if (tree.fragment) {
        var routerLinkNavigate = nextObject.href.split('#');
        this.router.navigate([routerLinkNavigate[0]], { fragment: tree.fragment });
      }
      else
        this.router.navigate([nextObject.href]);
    }
    
  }






  previousLink() {
    var currentObjIndex = this.links.findIndex(a => a.href == location.pathname);
    if (currentObjIndex != undefined) {
      currentObjIndex--;
      var nextObj = this.links[currentObjIndex];
      this.router.navigate([nextObj.link]);
    }
  }

  scrollTo(section) {
    window.location.hash = section;
  }
}
