export const   CONDITIONAL_SCOPED_TRANSLATIONS = [
    {
        "name": "src",
        "type": "folder",
        "exampleType": "conditional",
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
                                "contentType":'typescript',
                                "ref":"conditional",
                                "content": "import { Component } from \"@angular\/core\";import { translate } from \"@rxweb\/translate\";\r\n\r\n@Component({\r\n  templateUrl: \".\/global.component.html\",\r\n})\r\nexport class GlobalComponent {\r\n  @translate()\r\n  global: { [key: string]: any };\r\n\r\n  questionType:number = 1;\r\n\r\n  askQuestion(questionType:number){\r\n    this.questionType  = questionType;\r\n  }\r\n\r\n}"
                            },
                            {
                                "name": "global.component.html",
                                "type": "file",
                                "ref": "conditional",
                                "contentType": 'html',
                                "content": "<h4 class=\"example-title\">{{global.conditionalScopeTitle}}<\/h4>\r\n<form class=\"work-sanslight mg-left-5 form-font-size\">\r\n    <div class=\"form-group\">\r\n      <div style=\"margin-top:10px;\">\r\n        <button type=\"button\" [class.active-bg-gray]=\"questionType == 1\" (click)=\"askQuestion(1)\" class=\"btn only-border padding-zero mr-2\">{{global.text.firstQuestion}}<\/button>\r\n        <button type=\"button\" [class.active-bg-gray]=\"questionType == 2\" (click)=\"askQuestion(2)\" class=\"btn only-border padding-zero\">{{global.text.secondQuestion}}<\/button>\r\n      <\/div>\r\n        <p class=\"col-form-label\" style=\"margin:10px;\"><b>{{global.text.conditionalText}}<\/b><\/p>\r\n    <\/div>\r\n<\/form>\r\n"
                            }
                        ]
                    }
                ]
            },
            {
                "name":"assets",
                "type":"folder",
                "childrens":[
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
                                 "contentType":'json',
                                 "ref":"static",
                                 "content": "{\r\n  \"conditionalScopeTitle\": \"Conditional Scoped Binding\",\r\n  \"text\": {\r\n    \"firstQuestion\": \"Who are you?\",\r\n    \"secondQuestion\":\"What are you doing?\",\r\n    \"conditionalText\": \"this.questionType == 1 ? this.global.text.simpleAnswer : this.global.text.perfectAnswer\",\r\n    \"simpleAnswer\": \"I am @rxweb\/translate library, Soon I will be in your project for smart translation work \uD83D\uDE1C.\",\r\n    \"perfectAnswer\": \"Right now, I am looking you. How sweet \uD83D\uDE0E.\"\r\n  }\r\n}\r\n"
 
                         }
                     ]
                     },{
                         "name": "fr",
                         "type": "folder",
                         "childrens": [{
                             "name": "global.fr.json",
                             "type": "file",        
                             "contentType":'json',
                             "ref":"static",
                             "content": "{\r\n  \"conditionalScopeTitle\": \"Liaison de port\u00E9e conditionnelle\",\r\n  \"text\": {\r\n    \"firstQuestion\": \"Qui \u00EAtes vous?\",\r\n    \"secondQuestion\":\"Que faites-vous?\",\r\n    \"conditionalText\": \"this.questionType == 1 ? this.global.text.simpleAnswer : this.global.text.perfectAnswer\",\r\n    \"simpleAnswer\": \"Je suis @rxweb\/translate library, je serai bient\u00F4t dans votre projet pour un travail de traduction intelligent \uD83D\uDE1C.\",\r\n    \"perfectAnswer\": \"En ce moment, je te regarde. C'est gentil \uD83D\uDE0E.\"\r\n  }\r\n}\r\n"
 
                         }]
                     }
                     ]
                    }
                ]
             },
            {
                "name": "rxweb.module.ts",
                "contentType":'typescript',
                "type": "file", "ref": "conditional",
                "content": "import { NgModule } from '@angular\/core'; \r\nimport { RxTranslateModule } from '@rxweb\/translate' \r\n \r\n@NgModule({ \r\n    imports: [ \r\n        RxTranslateModule.forRoot({ \r\n            cacheLanguageWiseObject: true, \r\n            globalFilePath: 'assets\/i18n\/{{language-code}}\/global.{{language-code}}.json', \r\n               }) \r\n    ], \r\n    exports: [RxTranslateModule], \r\n}) \r\nexport class RxWebModule { }\r\n\r\n\/\/ Import this RxWebModule in your root module",
            }
        ]
    }
]

