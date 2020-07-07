import { Component, OnInit, Input} from '@angular/core';
import { TabModel } from "src/app/components/shared/app-tabs/tab.model";
import { identifierModuleUrl } from '@angular/compiler';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: './app-tabs.component.html',
})

export class AppTabsComponent implements OnInit {
  @Input() tabArray:TabModel[];
  @Input() content;
  @Input() typeName:string;
  @Input() templateDrivenType:string;
  activeTab:string;
  constructor(private router : Router
  ) {
  }
  
  ngOnInit(): void {
    if(this.router.url.includes("vue")){
     if(this.tabArray[3]){
       if(this.tabArray[3].tabName == "Html"){
         this.tabArray.remove(this.tabArray[3]);
       }
     } 
    }
    if(this.tabArray != undefined && this.tabArray.length > 0){
      if(this.router.url.includes("angular-strongly-typed"))
      this.activeTab = this.tabArray[1].tabName;
      else
      this.activeTab = this.tabArray[0].tabName;
    }
  }
}

