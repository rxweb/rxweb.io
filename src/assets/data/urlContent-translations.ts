export const URL_CONTENT_TRANSLATIONS = [
  {
    "name": "src",
    "type": "folder",
    "exampleType": "urlContent",
    "childrens": [
      {
        "name": "app",
        "type": "folder",
        "childrens": [
          {
            "name": "signup",
            "type": "folder",
            "childrens": [
              {
                "name": "signup.component.ts",
                "type": "file",
                "contentType": 'typescript',
                "active": true,
                "ref": "urlContent",
                "content": "import { Component } from \"@angular\/core\"\r\nimport { translate, RxTranslation} from '@rxweb\/translate'\r\nimport { Router } from '@angular\/router';\r\n\r\n@Component({\r\n    templateUrl: '.\/signup.component.html',\r\n    selector:\"app-signup\"\r\n})\r\nexport class SignupComponent {\r\n\r\n    @translate({ translationName: \"signup\" })\r\n    multilingualContent: { [key: string]: any }\r\n\r\n    baseUrl: string = 'https:\\\\\\\\example.com';\r\n    supportedUrl: string = '';\r\n    url: string = \"https:\\\\\\\\example.com\\\\\" + this.multilingualContent.languageCode +\"\\\\signup\";\r\n    \r\n\r\n    constructor(private route: Router, private rxTranslation: RxTranslation) { }\r\n\r\n    navigate(languageCode: string) {\r\n        this.supportedUrl = \"\\\\\" + languageCode + \"\\\\signup\"\r\n        this.url = this.baseUrl + this.supportedUrl;\r\n        this.rxTranslation.change(languageCode);\r\n    }\r\n}"
              },
              {
                "name": "signup.component.html",
                "type": "file",
                "ref": "urlContent",
                "contentType": 'html',
                "content": "<h4 class=\"example-title\" *ngIf=\"multilingualContent.text\">{{multilingualContent.urlContentTitle}}<\/h4>\r\n<form class=\"work-sanslight mg-left-5 form-font-size\">\r\n  <div class=\"form-group row\">\r\n    <label class=\"col-sm-2 col-form-label\">{{multilingualContent.text.url}}<\/label>\r\n    <div class=\"col-sm-10\">\r\n      <input class=\"url-control form-control\" tabindex=\"-1\" type=\"url\" [placeholder]=\"multilingualContent.placeholder.url\" value=\"{{url}}\">\r\n    <\/div>\r\n  <\/div>\r\n  <p class=\"small text-center text-gray-soft\">\r\n    <a class=\"blue-link btn only-border mr-2\" [class.active-language]=\"multilingualContent.languageCode == 'en'\"\r\n      (click)=\"navigate('en')\">English<\/a>\r\n    <a class=\"blue-link btn only-border\" [class.active-language]=\"multilingualContent.languageCode == 'fr'\"\r\n      (click)=\"navigate('fr')\">French<\/a>\r\n  <\/p>\r\n<\/form>"
              }
            ]
          },
          {
            "name": "app-routing.module.ts",
            "type": "file",
            "contentType": 'typescript',
            "ref": "urlContent",
            "content": "import { NgModule } from '@angular\/core';\r\nimport { Routes, RouterModule } from '@angular\/router';\r\nimport { SignUpComponent } from '.\/signup\/signup.component';\r\n\r\n\r\nconst routes: Routes = [\r\n    {\r\n        path: '',\r\n        redirectTo: \"en\/signup\",\r\n        pathMatch: \"full\"\r\n    },\r\n    {\r\n        path: ':languageCode\/signup',\r\n        component: SignUpComponent\r\n    }];\r\n\r\n@NgModule({\r\n    imports: [RouterModule.forRoot(routes)],\r\n    exports: [RouterModule]\r\n})\r\nexport class AppRoutingModule { }\r\n\r\n\/\/Import this AppRoutingModule in your root module\r\n"
          }
        ]
      },
      {
        "name": "assets",
        "type": "folder",
        "childrens": [
          {
            "name": "i18n",
            "type": "folder",
            "childrens": [{
              "name": "en",
              "type": "folder",
              "childrens": [
                {
                  "name": "signup.en.json",
                  "type": "file",
                  "contentType": 'json',
                  "ref": "urlContent",
                  "content": "{\r\n  \"urlContentTitle\": \"Content Translation By URL\",\r\n  \"text\": {\r\n    \"url\": \"URL\"\r\n  }\r\n  \"placeholder\": {\r\n    \"url\": \"https:\\\\\\\\example.com\"\r\n  }\r\n}"
                }
              ]
            }, {
              "name": "fr",
              "type": "folder",
              "childrens": [{
                "name": "signup.fr.json",
                "type": "file",
                "contentType": 'json',
                "ref": "urlContent",
                "content": "{\r\n  \"urlContentTitle\": \"Traduction de contenu par URL\",\r\n  \"text\": {\r\n    \"url\": \"URL\"\r\n  }\r\n  \"placeholder\": {\r\n    \"url\": \"https:\\\\\\\\example.com\"\r\n  }\r\n}"
              }]
            }
            ]
          }
        ]
      },
      {
        "name": "rxweb.module.ts",
        "type": "file", 
        "ref": "urlContent",
        "contentType": 'typescript',
        "content": "import { NgModule } from '@angular\/core'; \r\nimport { RxTranslateModule } from '@rxweb\/translate' \r\n \r\n@NgModule({ \r\n    imports: [ \r\n        RxTranslateModule.forRoot({ \r\n            cacheLanguageWiseObject: true, \r\n            globalFilePath: 'assets\/i18n\/{{language-code}}\/global.{{language-code}}.json', \r\n               }) \r\n    ], \r\n    exports: [RxTranslateModule], \r\n}) \r\nexport class RxWebModule { }\r\n\r\n\/\/ Import this RxWebModule in your root module",
      }
    ]
  }
]
