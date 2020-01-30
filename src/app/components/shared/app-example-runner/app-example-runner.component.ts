import { Component, OnChanges, SimpleChanges, OnInit, Input, EventEmitter, AfterContentInit } from '@angular/core';
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


@Component({
  selector: 'app-example-runner',
  templateUrl: './app-example-runner.component.html',
  entryComponents: [AppCodeComponent, CodeExampleComponent]
})

export class AppExampleRunnerComponent implements OnInit {
  @Input() title: string;
  @Input() refComponent: string;
  @Input() decoratorName: string;
  @Input() exampleName: string;
  @Input() typeName: string;
  @Input() content: any;
  @Input() showTab: boolean;
  showStackBlitz: boolean = true;
  exampleHeights: any = [{ exampleName: 'add', height: 150 }, { exampleName: 'conditionalExpression', height: 370 }, { exampleName: 'allowWhiteSpace', height: 160 }, { exampleName: 'message', height: 160 }, { exampleName: 'messageKey', height: 160 }, { exampleName: 'locale', height: 160 }, { exampleName: 'complete', height: 750 }, { exampleName: 'dynamic', height: 650 }]
  exampleHeight: number;
  exampleUrl: SafeResourceUrl;
  @Input() templateDrivenType: string;
  showElement: any = {};
  isRunCode: boolean = false;
  tabArray: any = {};
  activeTab: string;
  showComponent: boolean = false;
  dataParam: any;
  constructor(private router: Router, private sanitizer: DomSanitizer
  ) {
    //this.exampleUrl = this.sanitizer.bypassSecurityTrustResourceUrl('http://localhost:9999');
  }
  ngOnInit(): void {
    if (document.location.pathname.includes("dynamic-validation")) {
      this.exampleHeight = 750;
      this.exampleUrl = "https://rxwebangular.z20.web.core.windows.net/" + this.router.url + "?exampleName=";
      this.isRunCode = true;
    }
    this.showElement = false;
    if (this.decoratorName == "get" || this.decoratorName == "post" || this.decoratorName == "delete" || this.decoratorName == "patch" || this.decoratorName == "put" || this.decoratorName == "sanitizer" || this.decoratorName == "list" || this.decoratorName == "async" || this.decoratorName == "prop" || this.decoratorName == "propArray" || this.decoratorName == "propObject") {
      this.showElement = true;
    }
    this.tabArray = [];
    if (this.content && this.showTab) {
      if (this.content.function != null)
        this.tabArray.push({ "tabName": "Component", "tabItem": "component", "content": this.content.function })
      if (this.content.model != null)
        this.tabArray.push({ "tabName": "Model", "tabItem": "model", "content": this.content.model })
      if (this.decoratorName != "sanitizer" && this.decoratorName != "post" && this.decoratorName != "delete" && this.decoratorName != "patch" && this.decoratorName != "put" && this.decoratorName != "get" && this.decoratorName != "list" && this.content.component != null)
        this.tabArray.push({ "tabName": "Component", "tabItem": "component", "content": this.content.component })
      if (JSON.stringify(this.content.json) !== JSON.stringify({})) {
        var jsonObject = this.content.json;
        if (jsonObject) {


          for (var prop in jsonObject) {
            if (jsonObject.hasOwnProperty(prop) && this.decoratorName != "get") {
              this.tabArray.push({ "tabName": prop, "tabItem": prop, "content": jsonObject[prop] })
            }
          }
        }
      }
      if (this.content.html != null)
        this.tabArray.push({ "tabName": "Html", "tabItem": "html", "content": this.content.html })
      if (this.content && this.content.dataParam)
        this.dataParam = this.content.dataParam;
      this.activeTab = this.tabArray[0].tabName;
    }
  }

  runCodeExample(exampleName) {
    debugger;
    let example = this.exampleHeights.filter(x => x.exampleName == exampleName);
    if (example.length > 0)
      this.exampleHeight = example[0].height;
    else
      this.exampleHeight = 160;
    let codeUrl = "";
    if (this.router.url.includes("#"))
      codeUrl = "https://rxwebangular.z20.web.core.windows.net/" + this.router.url.split("#")[0] + "?exampleName=" + exampleName;
    else
      codeUrl = "https://rxwebangular.z20.web.core.windows.net/" + this.router.url + "?exampleName=" + exampleName;

    this.exampleUrl = this.sanitizer.bypassSecurityTrustResourceUrl(codeUrl);
    setTimeout(() => { this.isRunCode = true; }, 500)
  }

  openStackblitz() {
    var stackBlitz = new StackBlitzService();
    let form = stackBlitz.buildForm(this.decoratorName, this.exampleName, this.typeName, this.templateDrivenType, this.content, this.title)
    document.body.appendChild(form);
    form.submit();
    document.body.removeChild(form);
  }
}

