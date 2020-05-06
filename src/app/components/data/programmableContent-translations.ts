export const PROGRAMMABLE_CONTENT_TRANSLATIONS = [
  {
    "name": "src",
    "type": "folder",
    "exampleType": "programmableContent",
    "childrens": [
      {
        "name": "app",
        "type": "folder",
        "childrens": [
          {
            "name": "login",
            "type": "folder",
            "childrens": [
              {
                "name": "login.component.ts",
                "type": "file",
                "active": true,
                "contentType": 'typescript',
                "ref": "programmableContent",
                "content": "import { Component } from \"@angular\/core\";\r\nimport { translate, RxTranslateModule,RxTranslation } from \"@rxweb\/translate\";\r\nimport { Router } from \"@angular\/router\";\r\n\r\n@Component({\r\n  templateUrl: \".\/login.component.html\"\r\n})\r\nexport class LoginComponent {\r\n  @translate({ translationName: \"login\" })\r\n  multilingualContent: { [key: string]: any };\r\n\r\n  constructor(private rxTranslation: RxTranslation) {  }\r\n\r\n  navigate(languageCode: string) {\r\n    this.rxTranslation.change(languageCode);\r\n  }\r\n}"
              },
              {
                "name": "login.component.html",
                "type": "file",
                "ref": "programmableContent",
                "contentType": 'html',
                "content": "<h4 class=\"example-title\" *ngIf=\"multilingualContent.text\">{{multilingualContent.programmableContentTitle}}<\/h4>\r\n<form class=\"work-sanslight mg-left-5 form-font-size\">\r\n  <div class=\"form-group row\">\r\n    <label class=\"col-sm-2 col-form-label\">{{multilingualContent.text.email}}\r\n      <span class=\"required ml-1 text-danger font-weight-bold\">*<\/span><\/label>\r\n    <div class=\"col-sm-10\">\r\n      <input type=\"text\" [placeholder]=\"multilingualContent.placeholder.email\" class=\"form-control\">\r\n    <\/div>\r\n  <\/div>\r\n  <div class=\"form-group row\">\r\n    <label class=\"col-sm-2 col-form-label\">{{multilingualContent.text.password}}<span\r\n        class=\"required ml-1 text-danger font-weight-bold\">*<\/span><\/label>\r\n    <div class=\"col-sm-10\">\r\n      <input type=\"password\" class=\"form-control\" [placeholder]=\"multilingualContent.text.password\">\r\n    <\/div>\r\n  <\/div>\r\n  <p class=\"small text-center text-gray-soft\">\r\n    <a class=\"blue-link btn only-border mr-2\" [class.active-language]=\"multilingualContent.languageCode == 'en'\"\r\n      (click)=\"navigate('en')\">English<\/a>\r\n    <a class=\"blue-link btn only-border\" [class.active-language]=\"multilingualContent.languageCode == 'fr'\"\r\n      (click)=\"navigate('fr')\">French<\/a>\r\n  <\/p>\r\n<\/form>"
              }
            ]
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
                  "name": "login.en.json",
                  "type": "file",
                  "contentType": 'json',
                  "ref": "programmableContent",
                  "content": "{\r\n  \"programmableContentTitle\": \"Programmable Content Translation\",\r\n  \"placeholder\": {\r\n    \"email\": \"Enter your email address\",\r\n    \"password\": \"Enter your password\"\r\n  },\r\n  \"text\": {\r\n    \"email\": \"Email Id\",\r\n    \"password\": \"Password\"\r\n  }\r\n}"
                }
              ]
            }, {
              "name": "fr",
              "type": "folder",
              "childrens": [{
                "name": "login.fr.json",
                "type": "file",
                "contentType": 'json',
                "ref": "programmableContent",
                "content": "{\r\n  \"programmableContentTitle\": \"Traduction de contenu programmable\",\r\n  \"placeholder\": {\r\n    \"email\": \"Entrez votre adresse email\",\r\n    \"password\": \"Tapez votre mot de passe\"\r\n  },\r\n  \"text\": {\r\n    \"email\": \"Identifiant e-mail\",\r\n    \"password\": \"Mot de passe\"\r\n  }\r\n}"
              }]
            }
            ]
          }
        ]
      },
      {
        "name": "rxweb.module.ts",
        "type": "file",
        "ref": "programmableContent",
        "contentType": 'typescript',
        "content": "\import { NgModule } from '@angular/core'; \r\nimport { RxTranslateModule } from '@rxweb/translate' \r\n \r\n@NgModule({ \r\n    imports: [ \r\n        RxTranslateModule.forRoot({ \r\n            cacheLanguageWiseObject: true, \r\n            globalFilePath: 'assets/i18n/{{language-code}}/global.{{language-code}}.json', \r\n               }) \r\n    ], \r\n    exports: [RxTranslateModule], \r\n}) \r\nexport class RxWebModule { }",
      }
    ]
  }
]
