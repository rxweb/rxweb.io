import { ElementRef, Component, OnChanges, SimpleChanges, OnInit, Input, OnDestroy } from '@angular/core';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
import { HttpClient, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { PageViewerComponent } from "src/app/components/shared/page-viewer/page-viewer.component";
import { ActivatedRoute } from "@angular/router";

import {
  trigger,
  style,
  animate,
  transition,
} from '@angular/animations';
import { environment } from 'src/environments/environment';
import { ApplicationBroadcaster } from '@rx/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  templateUrl: './page.component.html',
  entryComponents: [PageViewerComponent],
  animations: [
    trigger(
      'enterAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate('500ms', style({ opacity: 0 }))
      ])
    ]
    )
  ],
})
export class PageComponent implements OnInit,OnDestroy { 
  links: any;
  showComponent: boolean = false;
  options: any = { responseType: 'text' };
  codeContent: any = "";
  jsonContent: any = "";
  activeTab: string = "";
  dynamicElement: string;
  myObserver = null;
  element: HTMLElement;
  typeName: string;
  gitUrl: string;
  validationName: string;
  showViewer: boolean = false;
  templateDrivenType: string = "directives";
  showExample: boolean = true;
  mainType: string;
  rightSidebarLinks: any;
  codeUri = "";
   htmlUri = ""
  constructor(
    private http: HttpClient, private elementRef: ElementRef,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private applicationBroadcaster: ApplicationBroadcaster,
    private sanitizer: DomSanitizer
  ) {
    this.applicationBroadcaster.topSubject.subscribe(t => {
      this.rightSidebarLinks = t.rightSidebarLinks;
      this.gitUrl = t.gitDocPath;
    })

    this.myObserver = router.events.subscribe((val) => { 

      if (val instanceof NavigationEnd) {
      debugger
       if(val.url.includes("vue")){
        if(val.url.split('/')[4])
        this.typeName = val.url.split('/')[4];
        else
        this.typeName = val.url.split('/')[3];
       }
       else{
        if(val.url.includes('#')){
        var newUrl = val.url.split('#')[0]
        val.url = val.url.replace(val.url,newUrl);
        }
        else if(val.url.includes("?")){
          var newUrl = val.url.split('?')[0]
          val.url = val.url.replace(val.url,newUrl);
        }
        if(val.url.split('/')[3])
        
        this.typeName = val.url.split('/')[3];
        else
        this.typeName = val.url.split('/')[2];
        
        if(val.url.includes("template-driven"))
        this.templateDrivenType =  val.url.split('/')[4];
        this.element = elementRef.nativeElement as HTMLElement;
      }
        activatedRoute.queryParams.subscribe(params => {
          if (params.showExample)
            this.showExample = params.showExample == "true" ? true : false;
          else
            this.showExample = true;
          });
        
          this.bind();
         
    }
  
    })
    
  }
  ngOnInit(): void {
  
  }
  ngOnDestroy() {
    this.myObserver.unsubscribe();
}
  nextLink() {
    var currentObjIndex = this.links.findIndex(a => a.link == this.router.url);
    if (currentObjIndex != undefined) {
      currentObjIndex++;
      var nextObj = this.links[currentObjIndex];
      this.router.navigate([nextObj.link]);
    }
  }

  previousLink() {
    var currentObjIndex = this.links.findIndex(a => a.link == this.router.url);
    if (currentObjIndex != undefined) {
      currentObjIndex--;
      var nextObj = this.links[currentObjIndex];
      this.router.navigate([nextObj.link]);
    }
  }
  bind() {
    this.codeUri = "";
    this.htmlUri = "";
    this.showViewer = false;
    let splitedArray = this.router.url.split('/');
    this.mainType = splitedArray[1];
    this.validationName = splitedArray[2];
    let titleString = "";
   

    if (this.mainType != "reactive-dynamic-forms"  && this.mainType != "strongly-typed" && this.mainType != "rxweb-storage" && this.mainType != "ngx-translate-extension" && this.mainType != "rxweb-localization" && this.mainType != "rxweb-router" && this.mainType != "vue" && this.mainType != "rxweb-http" && this.mainType != "rxweb-generics" && this.mainType != "rxweb-sanitizers") {
      if(splitedArray[3].includes("?")){
        var newUrl = splitedArray[3].split('?')[0]
        splitedArray[3] = splitedArray[3].replace(splitedArray[3],newUrl);
      }
      if(splitedArray[3].includes("#")){
        var newUrl = splitedArray[3].split('#')[0]
        splitedArray[3] = splitedArray[3].replace(splitedArray[3],newUrl);
      }
      switch (splitedArray[3]) {
        case "decorators":
          this.codeUri = 'assets/json/generator/' + this.validationName + '/' + this.typeName + '.json?v=' + environment.appVersion;
          this.htmlUri = 'assets/json/generator/' + this.validationName + '/' + this.validationName + '-' + this.typeName + '.json?v=' + environment.appVersion;
          titleString = "decorator";
          break;
        case "validators":
          this.codeUri = 'assets/json/generator/' + this.validationName + '/' + this.typeName + '.json?v=' + environment.appVersion;
          this.htmlUri = 'assets/json/generator/' + this.validationName + '/' + this.validationName + '-' + this.typeName + '.json?v=' + environment.appVersion;
          titleString = "validator";
          break;
        case "template-driven":
          this.codeUri = 'assets/json/generator/' + this.validationName + '/' + this.typeName + '-' + this.templateDrivenType + '.json?v=' + environment.appVersion;
          if (this.templateDrivenType == "decorators")
            this.htmlUri = 'assets/json/generator/' + this.validationName + '/' + this.typeName + '/' + this.validationName + '-validation-' + this.templateDrivenType + '.json?v=' + environment.appVersion;
          else if (this.templateDrivenType == "directives")
            this.htmlUri = 'assets/json/generator/' + this.validationName + '/' + this.typeName + '/' + this.validationName + '-validation-' + this.templateDrivenType + '.json?v=' + environment.appVersion;
          titleString = "template-driven";
          break;
      }
      document.title = splitedArray[2] + " - RxWeb Docs";
    }
  //  else if(this.mainType == "api"){
  //    debugger;
  //   this.typeName = this.router.url.split('/')[2];
  //   this.codeUri = 'assets/json/generator/' + this.typeName + '/' + 'decorators' + '.json';
  //   this.htmlUri = 'assets/json/generator/' + this.typeName + '/' + this.typeName + '-' + 'decorators' + '.json';
  //   titleString = "validator";
  //   document.title = this.typeName + " - RxWeb Docs";
  //  }
    else if (this.mainType == "vue") {
      let vuesSplitedArray = this.router.url.split('/');
      this.codeUri = 'assets/json/generator/' + vuesSplitedArray[3] + '/' + 'decorators' + '.json';
      this.htmlUri = 'assets/json/generator/vue/' + vuesSplitedArray[3] + '/' + vuesSplitedArray[3] + '-' + 'vue' + '.json';
      titleString = "validator";
      document.title = splitedArray[3] + " - RxWeb Docs";
    }
 
    else if (this.mainType == "strongly-typed") {
      let dynamicsplitedArray = this.router.url.split('/');
      if(dynamicsplitedArray[2] && dynamicsplitedArray[2].includes('#')){
        var newUrl = dynamicsplitedArray[2].split('#')[0];
        dynamicsplitedArray[2] = newUrl;
      }
      this.codeUri = 'assets/json/generator/' + dynamicsplitedArray[2] + '/' + 'validators' + '.json';
      this.htmlUri = 'assets/json/generator/' + dynamicsplitedArray[2] + '/' + dynamicsplitedArray[2] + '-' + 'validators' + '.json';
      titleString = "validator";
      document.title = splitedArray[2] + " - RxWeb Docs";
    }

    else {
      let dynamicsplitedArray = this.router.url.split('/');
      if(dynamicsplitedArray[3] && dynamicsplitedArray[3].includes('#')){
      var newUrl = dynamicsplitedArray[3].split('#')[0];
      dynamicsplitedArray[3] = dynamicsplitedArray[3].replace(dynamicsplitedArray[3],newUrl);
      }     
      this.codeUri = 'assets/json/generator/' + dynamicsplitedArray[3] + '/' + 'validators' + '.json';
      this.htmlUri = 'assets/json/generator/' + dynamicsplitedArray[3] + '/' + dynamicsplitedArray[3] + '-' + 'validators' + '.json';
      titleString = "validator";
      document.title = splitedArray[3] + " - RxWeb Docs";
    }

   
    if(this.typeName)

    this.http.get(this.codeUri, this.options).subscribe(response => {
      this.codeContent = JSON.parse(response.toString());
      if (this.router.url.includes("vue")) {
        this.codeContent.htmlContent = this.codeContent.htmlContent.replace("Through Angular FormBuilder service we create FormGroup in the component.", "");
        this.codeContent.htmlContent = this.codeContent.htmlContent.replace("Next, we need to write html code.", "");
      }
      this.http.get(this.htmlUri, this.options).subscribe((responseObj: object) => {      
        this.jsonContent = JSON.parse(responseObj.toString());
        this.showComponent = true;
        this.activeTab = splitedArray[3];
        this.applicationBroadcaster.topSubject.next({ ...this.codeContent, activeTab: this.activeTab, mainType: this.mainType, validationName: this.validationName, templateDrivenType: this.templateDrivenType })
        this.showViewer = true;
      });
    });
  }

  route(typeName: string, templateDrivenType?: string) {
    if (templateDrivenType) {
      this.router.navigate(['/', this.mainType, this.validationName, typeName, templateDrivenType])
      this.templateDrivenType = templateDrivenType;
    }
    else
      this.router.navigate(['/', this.mainType, this.validationName, typeName])
  }
  scrollTo(section) {
    window.location.hash = section;
  }

  routeExample() {

    this.showExample = !this.showExample;
    var splitedArray = this.router.url.split('/')
    if (splitedArray[4])
    
      this.router.navigate(['/', splitedArray[1], splitedArray[2], splitedArray[3], splitedArray[4]], { queryParams: { showExample: this.showExample } });
    else
    if(splitedArray[3].includes("?")){
      var newUrl = splitedArray[3].split('?')[0]
      splitedArray[3] = splitedArray[3].replace(splitedArray[3],newUrl);
    }
      this.router.navigate(['/', splitedArray[1], splitedArray[2], splitedArray[3]], { queryParams: { showExample: this.showExample } });
  }
}
