import { Component, OnChanges, SimpleChanges, OnInit, Input, EventEmitter, HostListener, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute, UrlSegment, NavigationEnd } from '@angular/router';
import { HttpClient } from "@angular/common/http";
import { ApplicationBroadcaster } from "@rx/core";

import { environment } from 'src/environments/environment';
import { element } from '@angular/core/src/render3';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
})

export class SideBarComponent implements OnInit {
  links: any;
  showComponent: boolean;
  userProfile: any;
  searchvalue: string
  pageLoaded: boolean = false;
  @ViewChild('search') searchInput: ElementRef;

  constructor(
    private http: HttpClient, private router: Router, private applicationBroadcaster: ApplicationBroadcaster, private activatedRoute: ActivatedRoute
  ) {
  }
  ngOnInit(): void {  
    if (this.router['location']['_platformStrategy']['_platformLocation'].location.pathname != "/" && this.router['location']['_platformStrategy']['_platformLocation'].location.pathname != "/home") { 
      if(location.pathname.includes("reactive-dynamic-forms")){
        this.http.get('assets/json/dynamic-sidebar.json').subscribe((response: any) => {
          this.links = response.links;
          var splitedArray = location.pathname.split('#')[0].split('/');
          console.log(splitedArray)
          if (splitedArray[2]) {
            var currentArray;
            if (splitedArray[2] == "controls" || splitedArray[2] == "static-binding" || splitedArray[2] == "conditional-binding") {
              var parentElement = this.links.filter(a => a.otherUri == 'ui-bindings');
              if (parentElement) {
                parentElement[0].isActive = true;
                parentElement[0].isOpen = true;
                currentArray = parentElement[0].childrens.filter(a => a.otherUri == splitedArray[2])
              }
            }
            else if(splitedArray[2] == "getting-started") {
              var parentElement = this.links.filter(a => a.otherUri == 'how-to');
              if (parentElement) {
                parentElement[0].isActive = true;
                parentElement[0].isOpen = true;
                currentArray = parentElement[0].childrens.filter(a => a.linkTitle == splitedArray[2])
              }
            }
            else if(splitedArray[2] == "dynamic-forms") {
              var currentElement = this.links.filter(a => a.linkTitle == splitedArray[3]);
              if (currentElement) {
                currentElement[0].isActive = true;
                currentElement[0].isOpen = true;
              }
              if (splitedArray[3] == "stepbystep") {
                var querystringArray = location.href.split('#');
                if(querystringArray[1]) {
                  currentArray = currentElement[0].childrens.filter(a => a.refUri == querystringArray[1])
                }
              }
            }
            else if(splitedArray[2] == "advance-form-design") {
              var parentElement = this.links.filter(a => a.otherUri == 'advance-form-design');
              if (parentElement) {
                parentElement[0].isActive = true;
                parentElement[0].isOpen = true;
                currentArray = parentElement[0].childrens.filter(a => a.linkTitle == splitedArray[3])
              }
            }
            else if (splitedArray[2].includes("dynamic-validation")) {
              var querystringArray = location.href.split('=');
              var currentObj, parentElement;
              if (querystringArray[1]) {
                currentArray = this.links.filter(a => a.otherUri == splitedArray[2]);
                currentArray[0].childrens.forEach(element => {
                  if (element.childrens) {
                    if (element.childrens.filter(a => a.title == querystringArray[1]).length != 0) {
                      currentObj = element.childrens.filter(a => a.title == querystringArray[1])
                      parentElement = element;
                    }
                  }
                });
                if (parentElement) {
                  parentElement.isActive = true;
                  parentElement.isOpen = true;
                }
                if (currentObj && currentObj.length > 0) {
                  currentObj[0].isActive = true;
                  currentObj[0].isOpen = true;
                }
              }
            }
            else {
              currentArray = this.links.filter(a => a.otherUri == splitedArray[1]);
            }
    
            if (currentArray && currentArray.length > 0) {
              currentArray[0].isActive = true;
              currentArray[0].isOpen = true;
              if (splitedArray[3]) {
                if (currentArray[0].childrens && currentArray[0].childrens.length > 0) {
                  if (splitedArray[2].includes('static-binding') || splitedArray[2].includes('conditional-binding') || splitedArray[2].includes('controls')) {
                    var currentObj;
                    if (currentArray[0].childrens.filter(a => a.linkTitle == splitedArray[3]).length != 0) {
                      currentObj = currentArray[0].childrens.filter(a => a.linkTitle == splitedArray[3])
                    }
                    else {
                      var currentChildArray = currentArray[0].childrens.filter(a => a.otherUri == splitedArray[3]);
                      currentChildArray[0].isActive = true
                      currentChildArray[0].isOpen = true
                      currentObj = currentChildArray[0].childrens.filter(a => a.uri.split('#')[2] == window.location.hash.substring(2))
                    }
                    if (currentObj && currentObj.length > 0) {
                      currentObj[0].isActive = true;
                      currentObj[0].isOpen = true;
                    }
                    else {
                      var currentObj = currentArray[0].childrens.filter(a => a.linkTitle == splitedArray[3]);
                      if (currentObj && currentObj.length > 0) {
                        currentObj[0].isActive = true;
                        currentObj[0].isOpen = true;
                      }
                    }
                  }
    
                  else if (splitedArray[2].includes('static-binding') || splitedArray[2].includes('conditional-binding') || splitedArray[2].includes('controls')) {
                   
                    currentArray[0].childrens.forEach(formvalidation => {
                      if (formvalidation.title != "required" && formvalidation.title != "notEmpty") {
                        formvalidation.childrens.forEach(element => {
                          if (element.title == splitedArray[3]) {
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
              else if (splitedArray[2].includes("dynamic-validation")) {
                var querystringArray = location.href.split('=');
                var currentObj, parentElement;
                if (querystringArray[2]) {
                  
                  currentArray[0].childrens.forEach(element => {
                    if (element.childrens) {
                      if (element.childrens.filter(a => a.title == querystringArray[2]).length != 0) {
                        currentObj = element.childrens.filter(a => a.title == querystringArray[2])
                        parentElement = element;
                      }
                    }
                  });
                  if (parentElement) {
                    parentElement.isActive = true;
                    parentElement.isOpen = true;
                  }
                  if (currentObj && currentObj.length > 0) {
                    currentObj[0].isActive = true;
                    currentObj[0].isOpen = true;
                  }
                }
              }
            }
            else {
              var children = this.links[1]['childrens'];
              var currentArray = children.filter(a => a.uri == splitedArray[2]);
              if (currentArray && currentArray.length > 0) {
                currentArray[0].isActive = true;
                currentArray[0].isOpen = true;
                if (splitedArray[3]) {
                  if (currentArray[0].childrens && currentArray[0].childrens.length > 0) {
                    var currentObj = currentArray[0].childrens.filter(a => a.title == splitedArray[3]);
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
     else{
      this.http.get('assets/json/sidebar.json?v=' + environment.appVersion).subscribe((response: any) => {
        this.userProfile = localStorage.getItem("profile") != undefined ? JSON.parse(localStorage.getItem("profile")) : null;
        this.links = response.links;
        var splitedArray = location.pathname.split('#')[0].split('/')
        if (splitedArray[1]) {
          var currentArray = this.links.filter(a => a.otherUri == splitedArray[1]);
          if (currentArray && currentArray.length > 0) {
            currentArray[0].isActive = true;
            currentArray[0].isOpen = true;
            if (splitedArray[2]) {
              if (currentArray[0].childrens && currentArray[0].childrens.length > 0) {
                if (splitedArray[1].includes('api')) {
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
                else if (splitedArray[1].includes('form-validation')) {

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
    }
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

