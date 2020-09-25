import { Component, OnChanges, SimpleChanges, OnInit, Input, EventEmitter, AfterContentInit, Inject, HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { HttpClient } from "@angular/common/http";
import { AppCodeComponent } from "src/app/components/shared/app-code/app-code.component";
import { ElementRef } from "@angular/core";
import { ComponentFactoryResolver } from "@angular/core";
import { ViewContainerRef } from "@angular/core";
import { ComponentView } from "src/app/domain/view";
import { ViewChild } from "@angular/core";
import { CodeExampleComponent } from "src/app/components/shared/code-example/code-example.component";
import { StackBlitzService } from "src/app/components/shared/stackblitz/stackblitz.service";
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common'


@Component({
  selector: 'app-example-runner',
  templateUrl: './app-example-runner.component.html',
  entryComponents: [AppCodeComponent, CodeExampleComponent]
})

export class AppExampleRunnerComponent implements OnInit {
  clientSideValidationType:string = "angular";
  @Input() title: string;
  @Input() refComponent: string;
  @Input() decoratorName: string;
  @Input() exampleName: string;
  @Input() typeName: string;
  @Input() content: any;
  @Input() showTab: boolean;
  showStackBlitz: boolean = true;
  exampleHeights: any = [{ exampleName: 'add', height: 160 }, { exampleName: 'conditionalExpression', height: 400 }, {exampleName:'defined',height:300},{ exampleName: 'allowWhiteSpace', height: 160 }, { exampleName: 'message', height: 180 }, { exampleName: 'messageKey', height: 180 }, { exampleName: 'locale', height: 160 }, { exampleName: 'complete', height: 750 }, { exampleName: 'dynamic', height: 650 }]
  exampleHeight: number;
  exampleUrl: SafeResourceUrl;
  @Input() templateDrivenType: string;
  showElement: any = {};
  isRunCode: boolean = false;
  tabArray: any = {};
  activeTab: string;
  showComponent: boolean = false;
  dataParam: any;
  constructor(private router: Router, private sanitizer: DomSanitizer)
  {
  }
 
  ngOnInit(): void {
    let codeUrl = "";
    this.showElement = false;
    if(this.router.url.includes("vue")){
      this.clientSideValidationType = "vue"
       let validationName = `${this.dashCase(this.router.url.split('/')[3])}`;
       codeUrl = "https://rxwebvue.z5.web.core.windows.net/#/" + validationName+ '-'+ `${this.dashCase(this.exampleName)}`;
       this.exampleUrl = this.sanitizer.bypassSecurityTrustResourceUrl(codeUrl);
       setTimeout(() => { this.isRunCode = true; }, 500)
     }
     let example = this.exampleHeights.filter(x => x.exampleName == this.exampleName);
    if (example.length > 0)
      this.exampleHeight = example[0].height;
    else
      this.exampleHeight = 160;
    if(this.decoratorName == "get"|| this.decoratorName == "post"  || this.decoratorName == "delete" || this.decoratorName == "patch" || this.decoratorName == "put" || this.decoratorName == "sanitizer" || this.decoratorName == "list" || this.decoratorName == "async" || this.decoratorName == "prop" || this.decoratorName == "propArray" || this.decoratorName == "propObject" )
    {
      this.showElement = true;
    }
    this.tabArray = []; 
    if(this.content && this.showTab){
      if(this.content.function != null)
      this.tabArray.push({"tabName": "Component", "tabItem": "component", "content": this.content.function})
      if (this.content.model != null)
        this.tabArray.push({ "tabName": "Model", "tabItem": "model", "content": this.content.model })
      if (this.decoratorName != "sanitizer"  && this.decoratorName != "post"  && this.decoratorName != "delete"   && this.decoratorName != "patch"  && this.decoratorName != "put" && this.decoratorName != "get"  && this.decoratorName != "list" && this.content.component != null)
        this.tabArray.push({ "tabName": "Component", "tabItem": "component", "content": this.content.component })
      if (JSON.stringify(this.content.json) !== JSON.stringify({}))
      {
        var jsonObject = this.content.json;
        if (jsonObject) {
          for (var prop in jsonObject) {
            if (jsonObject.hasOwnProperty(prop) && this.decoratorName !="get") {
              this.tabArray.push({ "tabName": prop, "tabItem": prop, "content": jsonObject[prop] })
            }
          }
        }
      }
      if (this.content.html != null)
        this.tabArray.push({ "tabName": "Html", "tabItem": "html", "content": this.content.html })
      if(this.content && this.content.dataParam)
      this.dataParam = this.content.dataParam;
      this.activeTab = this.tabArray[0].tabName;
    }
  
  }


  private dashCase(value: string, seprator: string = "-") {
    let count = 0;
    value = value.replace(" ", seprator);
    let newString = "";
    value.split('').forEach(t => {
      if (count != 0 && t != t.toLowerCase())
        newString += seprator;
      newString += t.toLowerCase();
      count++;
    });
    return newString;
  }

  


  openStackblitz() {
    if(this.decoratorName == "multilingualValidationMessage"){
      window.open("https://stackblitz.com/edit/rxweb-multilingual-error-messages?file=src%2Fapp%2Frxweb.module.ts", "_blank");
    }
    else{
    var stackBlitz = new StackBlitzService();
    let form = stackBlitz.buildForm(this.decoratorName, this.exampleName, this.typeName, this.templateDrivenType, this.content, this.title)
    document.body.appendChild(form);
    form.submit();
    document.body.removeChild(form);
    }
  }
}

