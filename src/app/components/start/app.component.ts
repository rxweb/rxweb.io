import { Component, ViewChild } from '@angular/core';
import { OnInit } from "@angular/core";
import { ReactiveFormConfig, ErrorMessageBindingStrategy } from "@rxweb/reactive-form-validators";
import { Router, RouterOutlet } from "@angular/router";
import { NavigationEnd } from "@angular/router";
import { HostListener } from "@angular/core";
import { NavigationStart } from "@angular/router";
import { trigger, style, animate, transition, query } from '@angular/animations';
import { ApplicationBroadcaster } from '@rx/core';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { RightSideBarComponent } from '../shared/right-sidebar/right-sidebar.component';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { HttpClientConfig } from '@rxweb/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //  animations: [
  //   trigger('routerAnimation', [
  //     transition('* <=> *', [
  //       // Initial state of new route
  //       query(':enter',
  //         style({
  //           // position: 'fixed',
  //           // width:'100%',
  //           // transform: 'translateX(-100%)',
  //           opacity:1
  //         }),
  //         // {
  //         //   optional:true
  //         // }
  //       ),

  //       // move page off screen right on leave
  //       query(':leave',
  //         animate('500ms ease',
  //           style({
  //             // position: 'fixed',
  //             // width:'100%',
  //             // transform: 'translateX(100%)'
  //             opacity:0
  //           })
  //         ),
  //       //{optional:true}
  //       ),

  //       // move page in screen from left to right
  //       // query(':enter',
  //       //   animate('500ms ease',
  //       //     style({
  //       //       opacity: 1,
  //       //       transform: 'translateX(0%)'
  //       //     })
  //       //   ),
  //       // {optional:true}),
  //     ])
  //   ])
  //]
})
export class AppComponent implements OnInit {
  gitterAsideShow: boolean = false;
  title = 'rx.web.io';
  isHome = false;
  isWhy: boolean = false;
  isShowSidebar: boolean = false;
  showFooter = false;
  isAspNetCore = false;
  gitAsideUrl: SafeResourceUrl;
  lastRouteName: string = ""
  rightSidebarLinks: any;
  constructor(private router: Router, private applicationBroadCast: ApplicationBroadcaster, private sanitizer: DomSanitizer, private http: HttpClient) {
    this.gitAsideUrl = sanitizer.bypassSecurityTrustResourceUrl("https://rxwebangular.z20.web.core.windows.net/");
    this.applicationBroadCast.urlSubscriber.subscribe(t => {
      this.homeInit(t)
    });
    this.applicationBroadCast.topSubject.subscribe(t => {
      this.rightSidebarLinks = t.rightSidebarLinks;
    })
    router.events.subscribe((val) => {

      if (val instanceof NavigationEnd) {
        console.log("calling routes")
        if (val.url == "/" || val.url == "/form-builder" || val.url == "/dynamic-form-builder" || val.url.includes("/home") || val.url.includes("/angular-home")) {
          this.isHome = true;
        }
        else if (val.url.includes("rx-web-core")) {
          this.isAspNetCore = true;
          this.isHome = false;
        }
        else {
          this.isHome = false;
        }

        if (location.pathname.includes("generics")) {
          if (this.lastRouteName != "generics") {
            this.lastRouteName = "generics";
            if (this.lastRouteName != "generics") {
              this.isShowSidebar = false;
              this.http.get('assets/json/generics-sidebar.json').subscribe((response: any) => {
                this.isShowSidebar = true
              })
              this.lastRouteName = "generics"
            }
          }
        }
        else if (location.pathname.includes("vue")) {
          if (this.lastRouteName != "vue") {
           // this.lastRouteName = "vue";
            if (this.lastRouteName != "vue") {
              this.isShowSidebar = false;
              this.http.get('assets/json/vue-sidebar.json').subscribe((response: any) => {
                this.isShowSidebar = true
              })
              this.lastRouteName = "vue"
            }
          }
        }
        else if (location.pathname.includes("sanitizers")) {
          if (this.lastRouteName != "sanitizers") {
            this.lastRouteName = "sanitizers";
            this.isShowSidebar = false
            this.http.get('assets/json/sanitizers-sidebar.json').subscribe((response: any) => {
              this.isShowSidebar = true
            })
            this.lastRouteName = "sanitizers";
          }
        }
        else if (location.pathname.includes("http")) {
          if (this.lastRouteName != "http") {
            this.lastRouteName = "http";
            this.isShowSidebar = false;
            this.http.get('assets/json/http-sidebar.json').subscribe((response: any) => {
              this.isShowSidebar = true
            })
            this.lastRouteName = "http";
          }
        }
        else if (location.pathname.includes("reactive-dynamic-forms")) {
          if (this.lastRouteName != "reactive-dynamic-forms") {
            this.lastRouteName = "reactive-dynamic-forms";
            this.isShowSidebar = false;
            this.http.get('assets/json/dynamic-sidebar.json').subscribe((response: any) => {
              this.isShowSidebar = true
            })
            this.lastRouteName = "reactive-dynamic-forms";
          }
        }
        else if (location.pathname.includes("rx-web-core")) {
          if (this.lastRouteName != "rx-web-core") {
            this.lastRouteName = "rx-web-core";
            this.isShowSidebar = false;
            this.http.get('assets/json/rxwebcore-sidebar.json').subscribe((response: any) => {
              this.isShowSidebar = true
            })
            this.lastRouteName = "rx-web-core";
          }
        }
        else {
          if (this.lastRouteName != "form-validations") {
            this.lastRouteName = "form-validations";
            this.isShowSidebar = false;
            this.http.get('assets/json/sidebar.json').subscribe((response: any) => {
              this.isShowSidebar = true
            })
            this.lastRouteName = "form-validations";
          }
        }

        var t = setTimeout(() => {
          this.showFooter = true;
        }, 500);
        if (location.host == "docs.rxweb.io") {
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

  // prepareRoute(outlet: RouterOutlet) {
  //   return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  // }

  ngOnInit() {

    this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        if (e.url.includes("/errorMessageStrategy") || e.url.includes("/dynamicerrormessagestrategy")) {
          ReactiveFormConfig.set({
            "validationMessage": {
              "required": "This field is required",
              "alpha": "Only alphabets are allowed.",
              "digit": "Only digits are allowed",
              "password": "Input does not match the password requirements",
              "composeMessageKey": "Please enter valid inputs"
            },
            "reactiveForm": {
              "errorMessageBindingStrategy":
                ErrorMessageBindingStrategy.OnSubmit
            }
          });
        }
        else {
          HttpClientConfig.register({
            hostURIs: [{
              name: 'local',
              default: true,
              uri: 'https://rxhttpapi.azurewebsites.net'
            }],
            filters: [],
            onError: (r) => { console.log(r) },

          })
          ReactiveFormConfig.set({
            "internationalization": {
              "dateFormat": "dmy",
              "seperator": "/"
            },
            "dynamicForm": {
              "uiFramework": "bootstrap",

            }
          
          });
        }
      }
    });

  }
  iswhyClick() {

    this.isWhy = false;
    if (typeof (Storage) !== "undefined") {

      if (localStorage.clickcount) {
        localStorage.clickcount = Number(localStorage.clickcount) + 1;
      } else {
        localStorage.clickcount = 1;
      }
    }
  }
  gitterAside() {
    this.gitterAsideShow = !this.gitterAsideShow;
  }

  homeInit(isHome) {
    this.isHome = isHome;
  }

}
