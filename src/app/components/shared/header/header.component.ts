import {Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Component({
    templateUrl:'header.component.html',
    selector:'app-header'
})

export class HeaderComponent implements OnInit {
   bindingLinks:any;
   translationStrategyLinks:any;
   contentStrategyLinks:any;
   constructor(private http:HttpClient){
       this.http.get('src.assets/json/topbar.json').subscribe(response => {
           this.bindingLinks = response['binding-links'];
           this.translationStrategyLinks = response['translation-strategy-links'];
           this.contentStrategyLinks = response['content-translation-links']
       })
   }
    ngOnInit(){
     this.http.get('src.assets/json/topbar.json').subscribe(response=>{
         this.bindingLinks = response['binding-links'];
         this.translationStrategyLinks = response['translation-strategy-links'];
         this.contentStrategyLinks = response['content-translation-links']
     })
    }
}
