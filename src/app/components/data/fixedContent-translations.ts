export const FIXED_CONTENT_TRANSLATIONS = [
  {
    "name": "src",
    "type": "folder",
    "exampleType": "fixedContent",
    "childrens": [
      {
        "name": "app",
        "type": "folder",
        "childrens": [
          {
            "name": "home",
            "type": "folder",
            "childrens": [
              {
                "name": "home.component.ts",
                "type": "file",
                "active": true,
                "contentType": 'typescript',
                "ref": "fixedContent",
                "content": "import { Component } from \"@angular\/core\"\r\nimport { translate, RxTranslation } from '@rxweb\/translate'\r\nimport { Router } from '@angular\/router';\r\n\r\n@Component({\r\n    templateUrl: '.\/home.component.html',\r\n    selector:'app-home'\r\n})\r\nexport class HomeComponent {\r\n    @translate({ translationName: \"home\",language:\"en\" })\r\n    multilingualContent: { [key: string]: any } \r\n}"
              },
              {
                "name": "home.component.html",
                "type": "file",
                "ref": "fixedContent",
                "contentType": 'html',
                "content": "<h4 class=\"example-title\">{{multilingualContent.text.fixedLabel}}<\/h4>\r\n<form class=\"work-sanslight mg-left-5 form-font-size\">\r\n    <div class=\"form-group row\">\r\n    <div class=\"px-lg-3\">\r\n      <li>{{multilingualContent.text.purpose}}<\/li>\r\n      <li>{{multilingualContent.text.fixedDescription}}<\/li>\r\n    <\/div>\r\n  <\/div>\r\n<\/form>"
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
            "childrens": [
              {
                "name": "en",
                "type": "folder",
                "childrens": [
                  {
                    "name": "home.en.json",
                    "type": "file",
                    "contentType": 'json',
                    "ref": "fixedContent",
                    "content": "{\r\n  \"text\": {\r\n    \"fixedLabel\": \"@rxweb\/translate\",\r\n    \"purpose\": \"Component wise internationalization\",\r\n    \"fixedDescription\": \"Different content translation strategies\"\r\n  }\r\n}"
                  }
                ]
              },
              {
                "name": "fr",
                "type": "folder",
                "childrens": [{
                  "name": "home.fr.json",
                  "type": "file",
                  "contentType": 'json',
                  "ref": "fixedContent",
                  "content": "{\r\n  \"text\": {\r\n    \"fixedLabel\": \"@rxweb\/translate\",\r\n    \"purpose\": \"Internationalisation des composants\",\r\n    \"fixedDescription\": \"Diff\u00E9rentes strat\u00E9gies de traduction de contenu\"\r\n  }\r\n}"
                }]
              }
            ]
          }
        ]
      },
      {
        "name": "rxweb.module.ts",
        "type": "file",
        "ref": "fixedContent",
        "contentType": 'typescript',
        "content": "import { NgModule } from '@angular\/core'; \r\nimport { RxTranslateModule } from '@rxweb\/translate' \r\n \r\n@NgModule({ \r\n    imports: [ \r\n        RxTranslateModule.forRoot({ \r\n            cacheLanguageWiseObject: true, \r\n            globalFilePath: 'assets\/i18n\/{{language-code}}\/global.{{language-code}}.json', \r\n               }) \r\n    ], \r\n    exports: [RxTranslateModule], \r\n}) \r\nexport class RxWebModule { }\r\n\r\n\/\/ Import this RxWebModule in your root module"
      }
    ]
  }
]
