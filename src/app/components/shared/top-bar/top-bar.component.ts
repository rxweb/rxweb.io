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
  isStarFirstTimeBind: boolean = true;
  isFirstTimeRightSideBarBind: boolean = true;
  secondLevelBreadCrumb: string = "Angular";
  toogleOpen: boolean = true;
  showComponent: boolean = true;
  isFirstLevelBreadCrumb: boolean = true;
  isSecondLevelBreadCrumb: boolean = true;
  showExample: boolean = true;
  @Input('sidebarLinks') sidebarLinks: any = [];
  @Input('gitUrl') gitUrl: string;
  cloneSidebarLinks: any = [];
  activeTab: string = "";
  gitEditUrl: string = "https://github.com/rxweb/rxweb.io/edit/master/";
  isDynamic: boolean;
  searchvalue1: string
  @ViewChild('search1') searchInput: ElementRef;
  titleData: any = { codeContent: {} };
  constructor(private applicationBroadCaster: ApplicationBroadcaster, private router: Router, private route: ActivatedRoute) {
    var starGitUrl = document.getElementById("starIframe");
    if (!starGitUrl)
      this.isStarFirstTimeBind = true;
    this.cloneSideBarLinkItems();
  }


  ngOnInit(): void {
    if (this.cloneSidebarLinks.length == 0) {
      if (Array.isArray(this.cloneSidebarLinks)) {
        this.cloneSidebarLinks = this.sidebarLinks;
        if (this.cloneSidebarLinks && this.cloneSidebarLinks.length > 0)
          this.titleData.title = this.cloneSidebarLinks[0].title;
      }
    }
    var splitedArray = this.router.url.split("/");
    this.mainType = splitedArray[1];
    this.validationName = splitedArray[2];
    if (splitedArray.length > 0 && splitedArray[1]) {

      if (splitedArray.includes("rx-web-core")) {
        this.secondLevelBreadCrumb = "AspNetCore";
        this.activeTab = "aspnetcore";
      }
      else if (splitedArray.includes("vue")) {
        this.secondLevelBreadCrumb = "Vue";
        this.activeTab = "vue";
      }
      else if(splitedArray.includes("why?package=reactive-forms")){
        this.activeTab = "why";
      }
      else{
        this.secondLevelBreadCrumb = "Angular";
        this.activeTab = "angular";
      }
    }
    this.cloneSideBarLinkItems();
    this.showComponent = true;
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
  addSearchBoxWidth() {
    var testarray = document.getElementsByClassName("ais-SearchBox");
    for (var i = 0; i < testarray.length; i++) {
      testarray[i].className += " searchbox-width";
    }
  }

  showsearchcontent1(event, searchvalue1: string) {
    var testarray = document.getElementsByClassName("ais-SearchBox");
    for (var i = 0; i < testarray.length; i++) {
      if (!testarray[i].classList.contains("searchbox-width"))
        testarray[i].className += " searchbox-width";
    }
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
      var testarray = document.getElementsByClassName("ais-SearchBox");
      for (var i = 0; i < testarray.length; i++) {
        testarray[i].classList.remove("searchbox-width");
      }
      this.searchInput['searchBox'].nativeElement.value = "";
      this.searchvalue1 = "";
      if (document.getElementById("searchlist-content") != undefined)
        document.getElementById("searchlist-content").style.display = "none";
    }, 300);
  }
  routeExample() {
    this.toogleOpen = !this.toogleOpen;
    this.showExample = !this.showExample;
    var splitedArray = this.router.url.split('/');
    if (splitedArray[4]) {
      if (splitedArray[4].includes("?")) {
        var newUrl = splitedArray[4].split('?')[0]
        splitedArray[4] = splitedArray[4].replace(splitedArray[4], newUrl);
      }
      this.router.navigate(['/', splitedArray[1], splitedArray[2], splitedArray[3], splitedArray[4]], { queryParams: { showExample: this.showExample }, replaceUrl: false });
    }
    else {
      if (splitedArray[3].includes("?")) {
        var newUrl = splitedArray[3].split('?')[0]
        splitedArray[3] = splitedArray[3].replace(splitedArray[3], newUrl);
      }
      if (splitedArray[3].includes("#")) {
        var newUrl = splitedArray[3].split('#')[0]
        splitedArray[3] = splitedArray[3].replace(splitedArray[3], newUrl);
      }
      this.router.navigate(['/', splitedArray[1], splitedArray[2], splitedArray[3]], { queryParams: { showExample: this.showExample }, replaceUrl: false });
    }
  }
  openMenu(): void {
    const body = document.getElementsByClassName('header-links content')[0];
    if (window.innerWidth < 769) {
      body.classList.toggle('open');
    }
  }
}