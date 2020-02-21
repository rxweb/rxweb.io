import { ElementRef, Component, OnChanges, SimpleChanges, OnInit, Input, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { HttpClient, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { PageViewerComponent } from "src/app/components/shared/page-viewer/page-viewer.component";
import { ActivatedRoute } from "@angular/router";
import { environment } from 'src/environments/environment';
import { ApplicationBroadcaster } from '@rx/core';
import hljs from 'highlight.js';
import { ContributionComponent } from '../shared/disqus/contribution/contribution.component';
import { ComponentView } from '@rx/core/view/view';
import { GitHubIssueComponent } from '../shared/disqus/github-issue/github-issue.component';
import { AppTabsComponent } from '../shared/app-tabs/app-tabs.component';
import { QuickStartComponent } from '../quick-start/quick-start.component';

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
  rightSidebarLinks: any = [];
  rootFolder: string;
  fileName: string;
  showViewer: boolean = false;
  upcomingLink: string;
  nestedFolder: string;
  childFolder: string;
  isNotFirstTime: boolean;
  componentViews: ComponentView<any>[] = new Array<ComponentView<any>>();
  constructor(
    private http: HttpClient,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private applicationBroadcaster: ApplicationBroadcaster,
    private viewContainerRef: ViewContainerRef, private componentFactoryResolver: ComponentFactoryResolver,
  ) {
    this.viewContainerRef = viewContainerRef;
    this.componentFactoryResolver = componentFactoryResolver;
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
    this.showViewer = false;
    let codeUri = this.getUri();
    this.http.get(codeUri, this.options).subscribe(response => {
      this.codeContent = JSON.parse(response.toString());
      var element = document.getElementById("mainContent")
      element.innerHTML = this.codeContent.htmlContent;
     
      let elements = element.querySelectorAll("[component]");
      Array.prototype.slice.call(elements).forEach((element: HTMLDivElement) => {
        let componentName = element.getAttribute("component");
        if (componentName == "app-quick-start")
          element.appendChild(this.create(QuickStartComponent).rootNode());
      })
    
      //element.innerHTML += "<h2>See next Interesting things</h2>";
      let docElement = document.getElementById("doc");
      element.appendChild(this.create(ContributionComponent, {}).rootNode());
      document.querySelectorAll('code').forEach((block) => {
        hljs.highlightBlock(block);
        console.log(block);
      });
      document.title =  this.codeContent.title + " - RxWeb Docs"; 
      this.applicationBroadcaster.topSubject.next(this.codeContent);
      this.showViewer = true;
    });
  }

  create(component: any, params?: { [key: string]: any }): any {
    let componentView = new ComponentView(component, this.viewContainerRef, this.componentFactoryResolver);
    componentView.create(params);
    this.componentViews.push(componentView);
    return componentView;
  }


  scrollTo(section) {
 
    window.location.hash = section;
  }
}
