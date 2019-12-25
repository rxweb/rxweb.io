import { Component, OnChanges, SimpleChanges,  Input, Inject, ViewChild, ElementRef, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ApplicationBroadcaster } from "@rx/core";
import { Router } from "@angular/router";

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
})

export class TopBarComponent  implements OnInit  {
  isGitEditUrlShow: boolean = true;
  isReactive:boolean
  validationName: string;
  mainType: string;
  toogleOpen: boolean = true;
  showExample: boolean = true;
  @Input('sidebarLinks') sidebarLinks: any = {};
  cloneSidebarLinks:any = [];
  gitEditUrl: string = "https://github.com/rxweb/rxweb.io/edit/master/";
  isDynamic:boolean
  searchvalue1: string
  @ViewChild('search1') searchInput: ElementRef;
  titleData:any = {codeContent:{}};
  constructor(private applicationBroadCaster:ApplicationBroadcaster,private router: Router){
    this.applicationBroadCaster.topSubscriber.subscribe(t=>{
      this.titleData = t;
    })
  }

  ngOnInit(): void {
    debugger;
    if (this.router.url.includes('whats-new') || this.router.url.includes('whats-next') || this.router.url.includes('why') || this.router.url.includes('getting-started') || this.router.url.includes('reactive-form-config'))
        this.isGitEditUrlShow = false;
    var splitedArray = location.pathname.split("/");
    this.mainType = splitedArray[1];
    this.validationName = splitedArray[2];
    if (splitedArray.length > 0 && splitedArray[1]) {

        switch (splitedArray[1]) {
            case "decorators":
                this.gitEditUrl += "docs/reactive-form-validators/decorators/" + splitedArray[2] + ".md"
                break;
            case "form-validations":
                this.gitEditUrl += "docs/reactive-form-validators/validation-decorators/" + splitedArray[2] + ".md"
                break;
            case "api":
                this.gitEditUrl += "docs/reactive-form-validators/api/" + splitedArray[2] + ".md"
                break;
            case "community":
                this.gitEditUrl += "docs/community/" + splitedArray[2] + ".md"
                break;
            case "sanitization":
                this.gitEditUrl += "docs/sanitization/" + splitedArray[2] + ".md"
                break
            case "how-to":
                this.gitEditUrl += "docs/how-to/" + splitedArray[2] + ".md"
                break
            case "reactive-dynamic-forms":
                this.gitEditUrl += "docs/dynamic-forms/" +
                 splitedArray[3] + ".md"
            case "rx-web-core":
            if(splitedArray[4])
        
            this.gitEditUrl += "docs/rx-web-core/" + splitedArray[2] +"/" + splitedArray[3] + "/" + splitedArray[4] + ".md"               
            else
            this.gitEditUrl += "docs/rx-web-core/" + splitedArray[2] +"/" + splitedArray[3] + ".md" 
        }
    }
    else if (splitedArray.length > 0 && splitedArray[0] == "changelog") {
        this.gitEditUrl += "CHANGELOG.md"
    }
    if (this.mainType != "community") {
    //    this.sidebarLinks.splice(0, 1);
    }
    console.log
    (this.sidebarLinks);
if(Array.isArray(this.sidebarLinks)){
  this.sidebarLinks.forEach(t=>{

    this.cloneSidebarLinks.push({...t,...{subLink:[]}})
    if(t.subLink && t.subLink.length > 0){
      t.subLink.forEach(x=>{
        this.cloneSidebarLinks.push(x);
      })
    }
  })
  
}
}
scrollTo(section) {
  var node = document.querySelector('#' + section);
  node.scrollIntoView(true);
  var scrolledY = window.scrollY;
  if (scrolledY) {
      window.scroll(0, scrolledY - 62);
  }
  return false;
}
  hideSideBar(): void {
    const body = document.getElementsByTagName('body')[0];
    if (window.innerWidth < 769)
      body.classList.toggle('show-sidebar');
    else
      body.classList.toggle('hide-sidebar');
  }

  showsearchcontent1(event, searchvalue1: string) {
    if (event.key == "Escape")
      this.hideSearch1();
    else {
      if (searchvalue1 != undefined && searchvalue1.length > 0)
        document.getElementById("searchlist-content").style.display = "block";
      else
        this.hideSearch1();
    }
  }
  hideSearch1() {
    setTimeout(() => {
      this.searchInput['searchBox'].nativeElement.value = "";
      this.searchvalue1 = "";
      if(document.getElementById("searchlist-content") != undefined)
        document.getElementById("searchlist-content").style.display = "none";
    },300);
  }
  routeExample() {
    this.toogleOpen = !this.toogleOpen;
    this.showExample = !this.showExample;
    var splitedArray = location.pathname.split('/');
    if (splitedArray[4])
        this.router.navigate(['/', splitedArray[1], splitedArray[2], splitedArray[3], splitedArray[4]], { queryParams: { showExample: this.showExample }, replaceUrl: false });
    else
        this.router.navigate(['/', splitedArray[1], splitedArray[2], splitedArray[3]], { queryParams: { showExample: this.showExample }, replaceUrl: false });
}
  openMenu(): void {
    const body = document.getElementsByClassName('header-links content')[0];
    if (window.innerWidth < 769) {
      body.classList.toggle('open');
    }
  }
}