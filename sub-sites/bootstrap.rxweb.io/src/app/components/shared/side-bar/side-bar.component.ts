import { Component, OnChanges, SimpleChanges, OnInit, Input, EventEmitter, HostListener, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { ApplicationBroadcaster } from '@rx/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
})

export class SideBarComponent implements OnInit {
  links: any;
  showComponent: boolean;
  searchvalue: string
  pageLoaded: boolean = false;
  sticky: boolean;
  @ViewChild('search') searchInput: ElementRef;
  sidebarUrl = '';
  refLinks: any[] = [];
  lastSearchValue: string = '';
  constructor(private http: HttpClient, private router: Router, private applicationBroadcaster: ApplicationBroadcaster) { }

  ngOnInit(): void {
    this.http.get('assets/json/dynamic-sidebar.json').subscribe((response: any) => {
      debugger;
      this.links = response.links;
      var splitedArray = location.pathname.split('#')[0].split('/')
      if (splitedArray[1]) {
        var currentArray = this.links.filter(a => a.otherUri == splitedArray[1]);
        if (currentArray && currentArray.length > 0) {
          currentArray[0].isActive = true;
          currentArray[0].isOpen = true;
          if (splitedArray[2]) {
            if (currentArray[0].childrens && currentArray[0].childrens.length > 0) {
              if (splitedArray[1].includes('static-binding')) {
                var currentObj;
                if (currentArray[0].childrens.filter(a => a.linkTitle == splitedArray[2]).length != 0) {
                  currentObj = currentArray[0].childrens.filter(a => a.linkTitle == splitedArray[2])
                }
                else {
                  var currentChildArray = currentArray[0].childrens.filter(a => a.otherUri == splitedArray[2]);
                  currentChildArray[0].isActive = true
                  currentChildArray[0].isOpen = true
                  currentObj = currentChildArray[0].childrens.filter(a => a.uri.split('#')[1] == window.location.hash.substring(1))
                }
                if (currentObj && currentObj.length > 0) {
                  currentObj[0].isActive = true;
                  currentObj[0].isOpen = true;
                }
                else {
                  var currentObj = currentArray[0].childrens.filter(a => a.linkTitle == splitedArray[2]);
                  if (currentObj && currentObj.length > 0) {
                    currentObj[0].isActive = true;
                    currentObj[0].isOpen = true;
                  }
                }
              }
              else if (splitedArray[1].includes('decorators') || splitedArray[1].includes('sanitization')) {
                var currentObj = currentArray[0].childrens.filter(a => a.title == splitedArray[2]);
                if (currentObj && currentObj.length > 0) {
                  currentObj[0].isActive = true;
                  currentObj[0].isOpen = true;
                }
              }
              else if (splitedArray[1].includes('static-binding')) {
                     debugger;
                currentArray[0].childrens.forEach(formvalidation => {
                  if (formvalidation.title != "required" && formvalidation.title != "notEmpty") {
                    formvalidation.childrens.forEach(element => {
                      if (element.title == splitedArray[2]) {
                        formvalidation.isOpen = true;
                        formvalidation.isActive = true;
                        element.isActive = true;
                        element.isOpen = true;
                      }
                    });
                  }
                })
              }
            }
          }
        }
        else {
          var children = this.links[1]['childrens'];
          var currentArray = children.filter(a => a.uri == splitedArray[1]);
          if (currentArray && currentArray.length > 0) {
            currentArray[0].isActive = true;
            currentArray[0].isOpen = true;
            if (splitedArray[2]) {
              if (currentArray[0].childrens && currentArray[0].childrens.length > 0) {
                var currentObj = currentArray[0].childrens.filter(a => a.title == splitedArray[2]);
                if (currentObj && currentObj.length > 0) {
                  currentObj[0].isActive = true;
                  currentObj[0].isOpen = true;
                }
              }
            }
          }
        }
      }
      this.showComponent = true;
    });
  }

  navigateTo(link: any, secondlevel: any, thirdlevel: any): void {
    if (link != null && link.uri != null) {
      this.links.forEach(element => {
        element.isActive = false;
        element.isOpen = false;
        if (element.childrens && element.childrens.length > 0) {
          element.childrens.forEach(subElement => {
            subElement.isActive = false;
            subElement.isOpen = false;
            if (subElement.childrens && subElement.childrens.length > 0) {
              subElement.childrens.forEach(thirdElement => {
                thirdElement.isActive = false;
                thirdElement.isOpen = false;
              });
            }
          })
        }
      });
      if (secondlevel != null) {
        secondlevel.isActive = true;
        secondlevel.isOpen = true;
      }
      if (thirdlevel != null) {
        thirdlevel.isActive = true;
        thirdlevel.isOpen = true;
      }
      link.isActive = true;
      this.router.navigateByUrl(link.uri);
    }
  }

  hideSideBar(): void {
    const body = document.getElementsByTagName('body')[0];
    if (window.innerWidth < 769) {
      body.classList.toggle('show-sidebar');
    } else {
      body.classList.toggle('hide-sidebar');
    }
  }

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

  hideSearch() {
    setTimeout(() => {
      this.searchInput['searchBox'].nativeElement.value = "";
      this.searchvalue = "";
      if (document.getElementById("searchlist-content") != undefined)
        document.getElementById("searchlist-content").style.display = "none";
    }, 300);
  }

  hideAll(jObject: any[], isHide: boolean, isOpen: boolean) {
    for (var i = 0; i < jObject.length; i++) {
      jObject[i].isHide = isHide;
      jObject[i].isOpen = isOpen;
      if (jObject[i].childrens && jObject[i].childrens.length > 0)
        this.hideAll(jObject[i].childrens, isHide, isOpen);
    }
  }
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
}