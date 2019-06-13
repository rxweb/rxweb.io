import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { ApplicationBroadcaster } from '@rx/core';
import { ReactiveFormConfig } from '@rxweb/reactive-form-validators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  title = 'bootstrap-rxweb-io';

  isHome = false;
  showFooter = false;
  rightSidebarLinks: any;

  constructor(private router: Router, private applicationBroadCast: ApplicationBroadcaster) {
    this.applicationBroadCast.urlSubscriber.subscribe(t => {
      this.homeInit(t)
    });
    this.applicationBroadCast.topSubject.subscribe(t => {
      this.rightSidebarLinks = t.rightSidebarLinks;
    })
    router.events.subscribe((val) => {

      if (val instanceof NavigationEnd) {
        if (val.url == "/" || val.url == "/home")
          this.isHome = true;
        else 
          this.isHome = false;
        
        var t = setTimeout(() => {
          this.showFooter = true;
        }, 500);
        if (location.host == "rxweb.io") {
          (<any>window).ga('set', 'page', val.urlAfterRedirects);
          (<any>window).ga('send', 'pageview');
        }
        var t = setTimeout(function () {
          const tree = router.parseUrl(router.url);
          if (tree.fragment) {
            const element = document.querySelector("#" + tree.fragment);
            if (element) {
              element.scrollIntoView({ block: "start", inline: "nearest" });
            }
          }
          let searchElement = <HTMLElement>document.getElementsByClassName("ais-SearchBox-input")[0];
          if (searchElement) {
            searchElement.focus();
          }
        }, 500);
      }
      if (val instanceof NavigationStart) {
        this.showFooter = false;
      }
    });
  }

  ngOnInit(): void {
    ReactiveFormConfig.set({
      "dynamicForm": {
        "uiFramework": "bootstrap",
      },
      "validationMessage": {

      }
    })
  }

  homeInit(isHome) {
    this.isHome = isHome;
  }

}
