export const SHARED_COMPONENT_TRANSLATIONS = [
  {
    "name": "src",
    "type": "folder",
    "exampleType": "shared-component",
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
                "ref": "shared-component",
                "content": "import { Component } from \"@angular\/core\"\r\nimport { translate } from '@rxweb\/translate'\r\n\r\n@Component({\r\n    templateUrl: '.\/user.component.html'\r\n})\r\nexport class UserComponent {\r\n\r\n    @translate({ translationName: \"user\" })\r\n    multilingualContent: { [key: string]: any }\r\n\r\n}"
              },
              {
                "name": "user.component.html",
                "type": "file",
                "ref": "shared-component",
                "contentType": 'html',
                "content": "<h4 class=\"example-title\">{{multilingualContent.sharedComponentTitle}}<\/h4>\r\n<form class=\"work-sanslight mg-left-5 form-font-size\">\r\n  <app-address *rxTranslate=\"true\"><\/app-address>\r\n<\/form>"
              }
            ]
          },
          {
            "name": "shared",
            "type": "folder",
            "childrens": [
              {
                "name": "address",
                "type": "folder",
                "childrens": [
                  {
                    "name": "address.component.ts",
                    "type": "file",
                    "active": true,
                    "contentType": 'typescript',
                    "ref": "shared-component",
                    "content": "import { Component } from \"@angular\/core\"\r\nimport { translate } from '@rxweb\/translate'\r\nimport { FormGroup, FormBuilder } from \"@angular\/forms\"\r\n\r\n@Component({\r\n    selector: \"app-address\",\r\n    templateUrl: '.\/address.component.html'\r\n})\r\nexport class AddressComponent {\r\n    @translate({ translationName: \"address\" }) \r\n    multilingualContent: { [key: string]: any };\r\n}\r\n"
                  },
                  {
                    "name": "address.component.html",
                    "type": "file",
                    "ref": "shared-component",
                    "contentType": 'html',
                    "content": "<div class=\"form-group row\">\r\n\t<label for=\"staticEmail\" class=\"col-sm-2 col-form-label\">{{multilingualContent.text.buildingName}}<\/label>\r\n  <div class=\"col-sm-10\">\r\n    <input type=\"text\" [placeholder]=\"multilingualContent.placeholder.buildingName\" class=\"form-control\">\r\n    <button  class=\"btn only-border padding-zero margin-top-20\">\r\n      {{multilingualContent.text.create}}\r\n    <\/button>\r\n  <\/div>\r\n<\/div>\r\n\r\n"
                  }
                ]
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
                  "name": "address.en.json",
                  "type": "file",
                  "contentType": 'json',
                  "ref": "shared-component",
                  "content": "{\r\n  \"placeholder\": {\r\n    \"buildingName\": \"Enter your building name\"\r\n  },\r\n  \"text\": {\r\n    \"buildingName\": \"Building Name\",\r\n    \"create\": \"Create Account\"\r\n  }\r\n}\r\n"
                },
                {
                  "name": "user.en.json",
                  "type": "file",
                  "contentType": 'json',
                  "ref": "shared-component",
                  "content": "{\r\n  \"sharedComponentTitle\": \"Resolve Translation of Shared Component\",\r\n}\r\n"
                }
              ]
            },
            {
              "name": "fr",
              "type": "folder",
              "childrens": [
                {
                  "name": "address.fr.json",
                  "type": "file",
                  "contentType": 'json',
                  "ref": "shared-component",
                  "content": "{\r\n  \"placeholder\": {\r\n    \"buildingName\": \"Entrez le nom de votre immeuble\"\r\n  },\r\n  \"text\": {\r\n    \"buildingName\": \"Nom du b\u00E2timent\",\r\n    \"create\": \"Cr\u00E9er un compte\"\r\n  }\r\n}\r\n"
                },
                {
                  "name": "user.fr.json",
                  "type": "file",
                  "contentType": 'json',
                  "ref": "shared-component",
                  "content": "{\r\n  \"sharedComponentTitle\": \"R\u00E9soudre la traduction d'un composant partag\u00E9\",\r\n}\r\n"
                }
              ]
            }
            ]
          }
        ]
      },
      {
        "name": "rxweb.module.ts",
        "type": "file",
        "ref": "shared-component",
        "contentType": 'typescript',
        "content": "import { NgModule } from '@angular\/core'; \r\nimport { RxTranslateModule } from '@rxweb\/translate' \r\n \r\n@NgModule({ \r\n    imports: [ \r\n        RxTranslateModule.forRoot({ \r\n            cacheLanguageWiseObject: true, \r\n            globalFilePath: 'assets\/i18n\/{{language-code}}\/global.{{language-code}}.json', \r\n               }) \r\n    ], \r\n    exports: [RxTranslateModule], \r\n}) \r\nexport class RxWebModule { }\r\n\r\n\/\/ Import this RxWebModule in your root module",
      }
    ]
  }
]