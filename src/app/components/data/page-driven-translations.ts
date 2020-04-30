export const PAGE_DRIVEN_TRANSLATIONS = [
  {
    "name": "src",
    "type": "folder",
    "exampleType": "pageDriven",
    "childrens": [
      {
        "name": "app",
        "type": "folder",
        "childrens": [
          {
            "name": "user",
            "type": "folder",
            "childrens": [
              {
                "name": "user.component.ts",
                "type": "file",
                "active": true,
                "contentType": 'typescript',
                "ref": "pageDriven",
                "content": "import { Component } from \"@angular\/core\"\r\nimport { translate } from '@rxweb\/translate'\r\n\r\n@Component({\r\n    templateUrl: '.\/user.component.html'\r\n})\r\nexport class UserComponent {\r\n\r\n    @translate({ translationName: \"user\" })\r\n    multilingualContent: { [key: string]: any }\r\n}"
              },
              {
                "name": "user.component.html",
                "type": "file",
                "ref": "pageDriven",
                "contentType": 'html',
                "content": "<h4 class=\"example-title\">{{multilingualContent.pageWiseTitle}}<\/h4>\r\n<form class=\"work-sanslight mg-left-5 form-font-size\">\r\n  <div>\r\n    <div class=\"form-group row col-lg-12\">\r\n      <label class=\"col-sm-2 col-form-label\">{{multilingualContent.text.firstName}}<\/label>\r\n      <div class=\"col-sm-10\">\r\n        <input type=\"text\" [placeholder]=\"multilingualContent.placeholder.firstName\" class=\"form-control\">\r\n        <button class=\"btn only-border padding-zero margin-top-20\">\r\n          {{multilingualContent.text.create}}\r\n        <\/button>\r\n      <\/div>\r\n    <\/div>\r\n  <\/div>\r\n<\/form>\r\n"
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
                  "name": "user.en.json",
                  "type": "file",
                  "contentType": 'json',
                  "ref": "pageDriven",
                  "content": "{\r\n  \"pageWiseTitle\": \"Resolve Translation Page Wise\",\r\n  \"placeholder\": {\r\n    \"firstName\": \"Enter your first name\"\r\n  },\r\n  \"text\": {\r\n    \"firstName\": \"First Name\",\r\n    \"create\": \"Create Account\"\r\n  }\r\n}"
                }
              ]
            }, {
              "name": "fr",
              "type": "folder",
              "childrens": [{
                "name": "user.fr.json",
                "type": "file",
                "contentType": 'json',
                "ref": "pageDriven",
                "content": "{\r\n  \"pageWiseTitle\": \"R\u00E9soudre la page de traduction Wise\",\r\n  \"placeholder\": {\r\n    \"firstName\": \"Entrez votre pr\u00E9nom\"\r\n  },\r\n  \"text\": {\r\n    \"firstName\": \"Pr\u00E9nom\",\r\n    \"create\": \"Cr\u00E9er un compte\"\r\n  }\r\n}"
              }]
            }
            ]
          }
        ]
      },
      {
        "name": "rxweb.module.ts",
        "type": "file", "ref": "pageDriven",
        "contentType": 'typescript',
        "content": "import { NgModule } from '@angular\/core'; \r\nimport { RxTranslateModule } from '@rxweb\/translate' \r\n \r\n@NgModule({ \r\n    imports: [ \r\n        RxTranslateModule.forRoot({ \r\n            cacheLanguageWiseObject: true, \r\n            globalFilePath: 'assets\/i18n\/{{language-code}}\/global.{{language-code}}.json', \r\n               }) \r\n    ], \r\n    exports: [RxTranslateModule], \r\n}) \r\nexport class RxWebModule { }\r\n\r\n\/\/ Import this RxWebModule in your root module",
      }
    ]
  }
]

