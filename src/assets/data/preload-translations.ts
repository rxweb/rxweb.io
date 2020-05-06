export const PRELOAD_TRANSLATIONS = [
  {
    "name": "src",
    "type": "folder",
    "childrens": [
      {
        "name": "app",
        "type": "folder",
        "childrens": [
          {
            "name": "global",
            "type": "folder",
            "childrens": [
              {
                "name": "global.component.ts",
                "type": "file",
                "active": true,
                "contentType": 'typescript',
                "ref": "preload",
                "content": "import { Component } from \"@angular\/core\";\r\nimport { translate, RxTranslateModule, RxTranslation } from \"@rxweb\/translate\";\r\nimport { Router } from \"@angular\/router\";\r\n\r\n@Component({\r\n  templateUrl: \".\/global.component.html\"\r\n})\r\nexport class GlobalComponent {\r\n\r\n  @translate()\r\n  multilingualContent: { [key: string]: any };\r\n\r\n}\r\n"
              },
              {
                "name": "global.component.html",
                "type": "file",
                "ref": "preload",
                "contentType": 'html',
                "content": "<span>{{multilingualContent.text.preloadText}}<\/span>"
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
                  "name": "global.en.json",
                  "type": "file",
                  "contentType": 'json',
                  "ref": "preload",
                  "content": "{\r\n  \"text\": {\r\n    \"preloadText\": \"Displayed description of 'Preload Translation in Background' is loaded through preload strategy\",\r\n   }\r\n}"
                }
              ]
            }, {
              "name": "fr",
              "type": "folder",
              "childrens": [{
                "name": "global.fr.json",
                "type": "file",
                "contentType": 'json',
                "ref": "preload",
                "content": "{\r\n  \"text\": {\r\n    \"preloadText\": \"La description affich\u00E9e de la traduction de pr\u00E9chargement en arri\u00E8re-plan est charg\u00E9e via la strat\u00E9gie de pr\u00E9chargement\",\r\n   }\r\n}"
              }]
            }
            ]
          }
        ]
      },
      {
        "name": "rxweb.module.ts",
        "type": "file", "ref": "preload",
        "contentType": 'typescript',
        "content": "import { NgModule } from '@angular\/core';\r\nimport { RxTranslateModule } from \"@rxweb\/translate\"\r\n\r\n@NgModule({\r\n    imports: [\r\n        RxTranslateModule.forRoot({\r\n            preloadingStrategy:true,\r\n            cacheLanguageWiseObject: true,\r\n            globalFilePath: \"assets\/i18n\/{{language-code}}\/global.{{language-code}}.json\",\r\n            filePath: \"assets\/i18n\/{{language-code}}\/{{translation-name}}.{{language-code}}.json\"\r\n        })\r\n    ],\r\n    exports: [RxTranslateModule],\r\n})\r\nexport class RxWebModule { }\r\n\r\n\/\/ Import this RxWebModule in your root module",
      }
    ]
  }
]
