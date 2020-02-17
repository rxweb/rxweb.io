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
  isSearch: boolean = false;

  bindSideBarLinks: any;
  @ViewChild('search') searchInput: ElementRef;

  constructor(
    private http: HttpClient, private router: Router, private applicationBroadcaster: ApplicationBroadcaster
  ) {

  }
  ngOnInit(): void {
    if (this.router['location']['_platformStrategy']['_platformLocation'].location.pathname != "/" && this.router['location']['_platformStrategy']['_platformLocation'].location.pathname != "/home") {
      if (location.pathname.includes("rx-web-core")) {
        this.http.get('assets/json/rxwebcore-sidebar.json').subscribe((response: any) => {
          this.links = response.links;
          var currentUrl = this.router.url;
          this.setActiveLink(currentUrl);
        });
      }

      else if (location.pathname.includes("vue")) {
        this.http.get('assets/json/vue-sidebar.json').subscribe((response: any) => {
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


  setActiveLink(currentUrl: string, isSearch: boolean = false) {

    for (let link of this.links) {
      if (link.childrens && Array.isArray(link.childrens) && link.childrens.length > 0) {
        link.isActive = this.isActiveChildren(currentUrl, link.childrens, isSearch);
      } else
        link.isActive = isSearch ? link.title == `${currentUrl.charAt(0).toLowerCase()}${currentUrl.replace(currentUrl.charAt(0), "")}` : link.uri == currentUrl;
      if (isSearch) {
        if (this.links != undefined) {
          var activeChildLink = this.links.filter(x => x.isActive == true);
          if (activeChildLink.length > 0) {
            this.links.forEach(element => {
              element.isHide = true;

            });
            activeChildLink.forEach(element => {
              element.isHide = false;
            })

          }
          else {
            link.isHide = false;
            link.isOpen = false;
          }
        }
      }
      
      if (link.isActive) {
        link.isOpen = true;
        break;
      }
    }
  }

  isActiveChildren(currentUrl: string, childrens: any[], isSearch) {
    let isActive = false;
    for (let link of childrens) {
      if (link.childrens && Array.isArray(link.childrens) && link.childrens.length > 0) {
        link.isActive = this.isActiveChildren(currentUrl, link.childrens, isSearch);
      } else
        link.isActive = isSearch ? link.title == `${currentUrl.charAt(0).toLowerCase()}${currentUrl.replace(currentUrl.charAt(0), "")}` : link.uri == currentUrl;
      if (isSearch) {
        if (this.links != undefined) {

          var activeChildLink = childrens.filter(x => x.isActive == true);
          if (activeChildLink.length > 0) {
            childrens.forEach(element => {
              element.isHide = true;

            });
            activeChildLink.forEach(element => {
              element.isHide = false;
            })

          }
        }
        else {
          link.isHide = false;
          link.isOpen = false;
        }
      }
     
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
    this.isSearch = true;
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
    if (this.isSearch) {
      searchResult.forEach(t => {
        this.setActiveLink(t.title, true);
      })
      this.isSearch = false;
    } else
      this.isSearch = false;
  }

  searchChildObject(searchObject: any, childrens: any[]) {
    for (let link of childrens) {
      if (link.childrens && Array.isArray(link.childrens) && link.childrens.length > 0) {
        this.searchChildObject(searchObject, link.childrens);
      } else {
        let refObject = childrens.filter(y => y.title.toLowerCase() == searchObject.title.toLowerCase())[0];
        if (refObject) {
          console.log(refObject);
          this.hideAll(refObject, true, true)
          refObject.isHide = false;
          refObject.isOpen = true;
          break;
        }
      }
    }

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
    var currentUrl = this.router.url;
    this.setActiveLink(currentUrl, false);
    setTimeout(() => {
      this.searchInput['searchBox'].nativeElement.value = "";
      this.searchvalue = "";
      if (document.getElementById("searchlist-content") != undefined)
        document.getElementById("searchlist-content").style.display = "none";
    }, 300);
  }
}

