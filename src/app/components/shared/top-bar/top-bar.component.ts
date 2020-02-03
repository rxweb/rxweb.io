import { Component, OnChanges, SimpleChanges, Input, Inject, ViewChild, ElementRef, OnInit, AfterContentInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ApplicationBroadcaster } from "@rx/core";
import { Router, ActivatedRoute } from "@angular/router";
import { isArray } from 'util';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
})

export class TopBarComponent implements OnInit {
  isGitEditUrlShow: boolean = true;
  isReactive: boolean
  validationName: string;
  mainType: string;
  isFirstTimeRightSideBarBind: boolean = true;
  secondLevelBreadCrumb: string = "Angular";
  toogleOpen: boolean = true;
  isFirstLevelBreadCrumb: boolean = true;
  isSecondLevelBreadCrumb: boolean = true;
  showExample: boolean = true;
  @Input('sidebarLinks') sidebarLinks: any = {};
  @Input('gitUrl') gitUrl: string;
  cloneSidebarLinks: any = [];
  gitEditUrl: string = "https://github.com/rxweb/rxweb.io/edit/master/";
  isDynamic: boolean
  searchvalue1: string
  @ViewChild('search1') searchInput: ElementRef;
  titleData: any = { codeContent: {} };
  constructor(private applicationBroadCaster: ApplicationBroadcaster, private router: Router, private route: ActivatedRoute) {
  
    this.cloneSideBarLinkItems();
  }


  ngOnInit(): void {
    var splitedArray = location.pathname.split("/");
    this.mainType = splitedArray[1];
    this.validationName = splitedArray[2];
    if (splitedArray.length > 0 && splitedArray[1]) {
      if (splitedArray.includes("rx-web-core"))
        this.secondLevelBreadCrumb = "AspNetCore";
      else
        this.secondLevelBreadCrumb = "Angular";
    }
    this.cloneSideBarLinkItems();
  }


  cloneSideBarLinkItems() {

    this.applicationBroadCaster.topSubscriber.subscribe(t => {

      if (t.rightSidebarLinks) {
        this.sidebarLinks = t.rightSidebarLinks;
      }
      else {
        this.sidebarLinks = t;
      }
      this.titleData = t;
      this.gitEditUrl = t.gitDocPath;
      if (this.sidebarLinks) {
        if (!this.titleData.title) {
          if (this.sidebarLinks[0])
            this.titleData.title = this.sidebarLinks[0].title;
        }
        this.cloneSidebarLinks = [];
        if (isArray(this.sidebarLinks)) {
          this.sidebarLinks.forEach(t => {
            this.cloneSidebarLinks.push({ ...t, ...{ subLink: [] } })
  
            if (t.subLink && t.subLink.length > 0) {
              t.subLink.forEach(x => {
                this.cloneSidebarLinks.push(x);
  
              })
            }
          })
  
        }
    
      }
    })
   
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
      if (document.getElementById("searchlist-content") != undefined)
        document.getElementById("searchlist-content").style.display = "none";
    }, 300);
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