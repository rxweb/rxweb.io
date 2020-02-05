import { Component, OnInit, Input} from '@angular/core';
import { TabModel } from "src/app/components/shared/app-tabs/tab.model";

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
  constructor(
  ) {
  }
  
  ngOnInit(): void {
    if(location.pathname.includes("vue")){
     if(this.tabArray[3]){
       if(this.tabArray[3].tabName == "Html"){
         this.tabArray.remove(this.tabArray[3]);
       }
     } 
    }
    if(this.tabArray != undefined && this.tabArray.length > 0){
   
      this.activeTab = this.tabArray[0].tabName;
    }
  }
}

