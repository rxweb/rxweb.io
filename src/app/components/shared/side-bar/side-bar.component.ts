import { Component, OnChanges, SimpleChanges, OnInit, Input, EventEmitter, HostListener, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute, UrlSegment, NavigationEnd } from '@angular/router';
import { HttpClient } from "@angular/common/http";
import { ApplicationBroadcaster } from "@rx/core";
import { environment } from 'src/environments/environment';
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
  config: any;
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
          this.config = {
            apiKey: '4f3d9e65c9459b43e692a149f365c74e',
            appId: 'U3S057LEMB',
            indexName: 'rxwebcore links'
          };
         
        });
      }

      else if (location.pathname.includes("vue")) {
        this.http.get('assets/json/vue-sidebar.json').subscribe((response: any) => {
          this.links = response.links;
          var currentUrl = this.router.url;
          this.setActiveLink(currentUrl);
          this.config = {
            apiKey: '4f3d9e65c9459b43e692a149f365c74e',
            appId: 'U3S057LEMB',
            indexName: 'vue-sidebar links'
          };
        });
      }

      else {
        this.http.get('assets/json/links.json?v=' + environment.appVersion).subscribe((response: any) => {
          this.userProfile = localStorage.getItem("profile") != undefined ? JSON.parse(localStorage.getItem("profile")) : null;
          this.links = response.links;
          var currentUrl = this.router.url;
          this.setActiveLink(currentUrl);
          this.config = {
            apiKey: '4f3d9e65c9459b43e692a149f365c74e',
            appId: 'U3S057LEMB',
            indexName: 'rxweb links'
          };
        });
      }
    }
  }


  setActiveLink(currentUrl: string) {
    for (let link of this.links) {
      if (link.childrens && Array.isArray(link.childrens) && link.childrens.length > 0) {
        link.isActive = this.isActiveChildren(currentUrl, link.childrens);
      } else
        link.isActive = link.uri == currentUrl;
      if (link.isActive) {
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
      if (searchvalue != undefined && searchvalue.length > 0) {
        this.isSearch = true;
        document.getElementById("searchlist-content1").style.display = "block";
      }
      else
        this.hideSearch();
    }
  }

  refLinks: any[] = [];
  lastSearchValue: string = '';
  bindLinks(searchResult: any[], searchvalue: string) {
  
    if (this.lastSearchValue != this.searchvalue) {
      this.lastSearchValue = this.searchvalue;
      if (searchvalue != undefined && searchvalue.length > 0) {
        this.isSearch = true;

        if (this.isSearch) {
          this.hideAll(this.links, true, true)
          if (Array.isArray(searchResult) && searchResult != undefined && searchResult.length > 0) {
            searchResult.forEach(t => {
              let searchObject = this.links;
              if (t.linkTrees) {
                t.linkTrees.forEach(x => {
                  let refObject = searchObject.filter(y => y.title == x)
                  if (refObject && refObject[0]) {
                    refObject[0].isHide = false;
                    refObject[0].isOpen = true;
                    this.searchChildSearchLink(t.linkTrees, refObject[0].childrens, 1, t)
                  }
                })
              }
            })
          }
        }
      }
    }
  }

  searchChildSearchLink(linkTrees: any[], childrens: any[], level: number, searchResult: any) {
    if (childrens) {
      let newrefObject = childrens.filter(z => z.title == linkTrees[level])
      if (newrefObject && newrefObject[0]) {
        newrefObject[0].isHide = false;
        newrefObject[0].isOpen = true;
        if (newrefObject[0].childrens) {
          this.searchChildSearchLink(linkTrees, newrefObject[0].childrens, level + 1, searchResult)
        }
      }
      else {
        let searchLink = childrens.filter(x => x.title == searchResult.title)
        if (searchLink[0])
          searchLink[0].isHide = false;
      }
    }
  }



  hideAll(jObject: any[], isHide: boolean, isOpen?: boolean) {
    for (var i = 0; i < jObject.length; i++) {
      jObject[i].isHide = isHide;
      jObject[i].isOpen = isOpen;
      if (jObject[i].childrens && jObject[i].childrens.length > 0)
        this.hideAll(jObject[i].childrens, isHide, isOpen);
    }
  }

  hideSearch() {
    this.hideAll(this.links, false)
    var currentUrl = this.router.url;
    this.setActiveLink(currentUrl);
    setTimeout(() => {
      this.searchInput['searchBox'].nativeElement.value = "";
      this.searchvalue = "";
      if (document.getElementById("searchlist-content") != undefined)
        document.getElementById("searchlist-content").style.display = "none";
    }, 300);
  }
}

