import { ViewContainerRef, Component, OnChanges, SimpleChanges, OnInit, Input, EventEmitter, OnDestroy, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from "@angular/common/http";
import { ElementRef } from "@angular/core";
import { ComponentFactoryResolver } from "@angular/core";
import { AppCodeComponent } from '../app-code/app-code.component'
import { ComponentView } from '../../../domain/view'

import { AppExampleRunnerComponent } from "src/app/components/shared/app-example-runner/app-example-runner.component";
import { AppTabsComponent } from "src/app/components/shared/app-tabs/app-tabs.component";
import { Inject } from "@angular/core";
import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { BaseComponentProvider } from "src/app/components/shared/base.component";


@Component({
    selector: 'page-viewer',
    templateUrl: './page-viewer.component.html',
}) 

export class PageViewerComponent extends BaseComponentProvider implements OnInit {
    componentName:string;
    key : string;
    @Input() content: string;
  
    constructor(
        private elementRef: ElementRef, componentFactoryResolver: ComponentFactoryResolver, viewContainerRef: ViewContainerRef,route: ActivatedRoute,
        @Inject(COMPONENT_EXAMPLE) exampleComponents: { [key: string]: any },
    ) {
        
        super(viewContainerRef, componentFactoryResolver, exampleComponents);
        route.queryParams.subscribe(t => {this.key = t["exampleName"]});
        this.element = elementRef.nativeElement as HTMLElement;
    }
    ngOnInit(): void {

        this.element.innerHTML = null;     
            let componentName = this.element.getAttribute("component");
            var params = this.getParams(this.element,this.key, componentName);
            if(params){               
           
                    this.element.appendChild(this.create(AppExampleRunnerComponent, params).rootNode());
            }
             
        
  
    }
    scrollTo(section) {
        location.hash = section;
        return false;
    }
}

