import { Component, OnChanges, SimpleChanges, OnInit, Input, EventEmitter, HostListener, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute, UrlSegment, NavigationEnd } from '@angular/router';
import { HttpClient } from "@angular/common/http";
import { ApplicationBroadcaster } from "@rx/core";
import { environment } from 'src/environments/environment';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { element } from '@angular/core/src/render3';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
})

export class SideBarComponent implements OnInit {
  links: any;
  showComponent: boolean;
  userProfile: any;
  isExist: boolean = false;
  searchvalue: string
  pageLoaded: boolean = false;
  bindSideBarLinks: any;
  @ViewChild('search') searchInput: ElementRef;

  constructor(
    private http: HttpClient, private router: Router, private applicationBroadcaster: ApplicationBroadcaster
  ) {

  }
  ngOnInit(): void {
    debugger;
    if (this.router['location']['_platformStrategy']['_platformLocation'].location.pathname != "/" && this.router['location']['_platformStrategy']['_platformLocation'].location.pathname != "/home") { 
      if (location.pathname.includes("rx-web-core")) {
        this.http.get('assets/json/rxwebcore-sidebar.json').subscribe((response: any) => {
          this.links = response.links;
          var currentUrl = this.router.url;
          this.setActiveLink(currentUrl);
        });       
      }
      else {
        this.http.get('assets/json/links.json?v=' + environment.appVersion).subscribe((response: any) => {
          this.userProfile = localStorage.getItem("profile") != undefined ? JSON.parse(localStorage.getItem("profile")) : null;
          this.links = response.links;   
          var currentUrl = this.router.url;
          this.setActiveLink(currentUrl);   
        });
      }     
    }
    this.showComponent = true;
  }


  setActiveLink(currentUrl: string) {
    for (let link of this.links) {
      if (link.childrens && Array.isArray(link.childrens) && link.childrens.length > 0) {
        link.isActive = this.isActiveChildren(currentUrl, link.childrens);
      } else
        link.isActive = link.uri == currentUrl;
      if (link.isActive){
      link.isOpen = true;
        break;
      }
    }
  }

  isActiveChildren(currentUrl: string, childrens: any[]) {
    let isActive = false;
    for (let link of childrens) {
      if (link.childrens && Array.isArray(link.childrens) && link.childrens.length > 0) {
        link.isActive = this.isActiveChildren(currentUrl, link.childrens);
      } else
        link.isActive = link.uri == currentUrl;
      if (link.isActive) {
        isActive = true;
        link.isOpen = true;
        break;
      }
    }
    return isActive;
  }


  
  hideSideBar(): void {
    const body = document.getElementsByTagName('body')[0];
    if (window.innerWidth < 769) {
      body.classList.toggle('show-sidebar');
    } else {
      body.classList.toggle('hide-sidebar');
    }
  }
  sticky: boolean;
  @HostListener('window:scroll', ['$event'])
  handleScroll() {
    const windowScroll = document.documentElement.scrollTop;
    if (windowScroll >= 50) {
      this.sticky = true;
    } else {
      this.sticky = false;
    }
  }
  showsearchcontent(event, searchvalue: string) {
    if (event.key == "Escape")
      this.hideSearch();
    else {
      if (searchvalue != undefined && searchvalue.length > 0)
        document.getElementById("searchlist-content1").style.display = "block";
      else
        this.hideSearch();
    }
  }

  refLinks: any[] = [];
  lastSearchValue: string = '';
  bindLinks(searchResult: any[]) {

    if (this.lastSearchValue != this.searchvalue) {
      this.lastSearchValue = this.searchvalue;
      if (this.searchvalue) {
        this.hideAll(this.links, true, true)
        searchResult.forEach(t => {
          let searchObject = this.links;
          if (t.linkTree) {
            t.linkTree.forEach(x => {
              let refObject = searchObject.filter(y => y.title.toLowerCase() == x.toLowerCase())[0];
              if (refObject) {
                refObject.isHide = false;
                searchObject = refObject.childrens;
              }
            })
            let refObject = searchObject.filter(y => y.title.toLowerCase() == t.title.toLowerCase())[0];
            if (refObject) {
              refObject.isHide = false;
              refObject.isOpen = true;
              if (refObject.childrens) {
                refObject.childrens.forEach(element => {
                  element.isHide = false;
                });
              }
            }
          }
        })
      } else
        if (this.pageLoaded)
          this.hideAll(this.links, false, false);
        else
          this.pageLoaded = true;
    }
    return;
  }

  hideAll(jObject: any[], isHide: boolean, isOpen: boolean) {
    for (var i = 0; i < jObject.length; i++) {
      jObject[i].isHide = isHide;
      jObject[i].isOpen = isOpen;
      if (jObject[i].childrens && jObject[i].childrens.length > 0)
        this.hideAll(jObject[i].childrens, isHide, isOpen);
    }
  }
  hideSearch() {
    setTimeout(() => {
      this.searchInput['searchBox'].nativeElement.value = "";
      this.searchvalue = "";
      if (document.getElementById("searchlist-content") != undefined)
        document.getElementById("searchlist-content").style.display = "none";
    }, 300);
  }
}

