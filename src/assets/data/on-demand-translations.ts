export const ON_DEMAND_TRANSLATIONS = [
    {
        "name": "src",
        "type": "folder",
        "exampleType": "on-demand",
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
                                "name": "data.ts",
                                "type": "file",
                                "ref": "on-demand",
                                "contentType": 'typescript',
                                "content": "export const USERS = [\r\n    {\r\n      id: \"1\",\r\n      name: \"Benny taylor\",\r\n      gender: \"female\",\r\n      email: \"benny.taylor@unisure.com\",\r\n      phone: \"+1 (978) 434-2855\"\r\n    },\r\n    {\r\n      id: \"2\",\r\n      name: \"Jack Thomas\",\r\n      gender: \"male\",\r\n      email: \"jack.thomas@unisure.com\",\r\n      phone: \"+1 (884) 459-2081\"\r\n    }\r\n  ]"
                            },
                            {
                                "name": "global.component.ts",
                                "type": "file",
                                "active": true,
                                "contentType": 'typescript',
                                "ref": "on-demand",
                                "content": "import { Component } from \"@angular\/core\";\r\nimport { HttpClient } from '@angular\/common\/http';\r\nimport { translate, RxTranslateModule, RxTranslation } from \"@rxweb\/translate\";\r\nimport { USERS } from '.\/data';\r\n\r\n@Component({\r\n  templateUrl: \".\/global.component.html\"\r\n})\r\nexport class GlobalComponent {\r\n  \r\n  @translate()\r\n  multilingualContent: { [key: string]: any };\r\n\r\n  users: any = USERS;\r\n  message: string;\r\n\r\n  constructor(private rxTranslation: RxTranslation) {\r\n  }\r\n\r\n  selectUser(user) {\r\n    this.message = this.rxTranslation.translate(\r\n      this.multilingualContent.text.selectedRecord,user\r\n    );\r\n  }\r\n}"
                            },
                            {
                                "name": "global.component.html",
                                "type": "file",
                                "ref": "on-demand",
                                "contentType": 'html',
                                "content": "<h4 class=\"example-title\">{{multilingualContent.onDemandTitle}}<\/h4>\r\n<div class=\"work-sanslight mg-left-5\">\r\n    <div class=\"table-responsive table-bordered\">\r\n        <table class=\"table mb-0 fs-14 table_md\">\r\n            <tbody>\r\n                <tr>\r\n                    <th>Name<\/th>\r\n                    <th>Gender<\/th>\r\n                    <th>Email<\/th>\r\n                    <th>Phone<\/th>\r\n                    <th>Action<\/th>\r\n                <\/tr>\r\n                <tr *ngFor=\"let user of users;\">\r\n                    <td>{{user.name}}<\/td>\r\n                    <td>{{user.gender}}<\/td>\r\n                    <td>{{user.email}}<\/td>\r\n                    <td>{{user.phone}}<\/td>\r\n                    <td class=\"text-center\">\r\n                        <a (click)=\"selectUser(user)\" class=\"mx-2 \" title=\"Select\">\r\n                            <i class=\"fas fa-trash\"><\/i>\r\n                        <\/a>\r\n                    <\/td>\r\n                <\/tr>\r\n            <\/tbody>\r\n        <\/table>\r\n    <\/div>\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12 mx-auto mt-2\">\r\n            <div *ngIf=\"message\" style=\"background-color:#5e95ce!important;color:white;\" class=\"alert alert-primary\"\r\n                role=\"alert\">\r\n                {{message}}\r\n            <\/div>\r\n        <\/div>\r\n    <\/div>\r\n<\/div>"
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
                                    "ref": "on-demand",
                                    "content": "{\r\n    \"onDemandTitle\":\"On Demand Content Translation\",\r\n    \"text\": {\r\n    \"selectedRecord\": \"You have selected record of '{name}'\"\r\n    }\r\n}"

                                }
                            ]
                        }, {
                            "name": "fr",
                            "type": "folder",
                            "childrens": [{
                                "name": "global.fr.json",
                                "type": "file",
                                "contentType": 'json',
                                "ref": "on-demand",
                                "content": "{\r\n    \"onDemandTitle\":\"Traduction de contenu \u00E0 la demande\",\r\n    \"text\": {\r\n    \"selectedRecord\": \"Vous avez s\u00E9lectionn\u00E9 l'enregistrement de '{name}'\"\r\n    }\r\n}"

                            }]
                        }
                        ]
                    }
                ]
            },
            {
                "name": "rxweb.module.ts",
                "contentType": 'typescript',
                "type": "file", "ref": "on-demand",
                "content": "import { NgModule } from '@angular\/core'; \r\nimport { RxTranslateModule } from '@rxweb\/translate' \r\n \r\n@NgModule({ \r\n    imports: [ \r\n        RxTranslateModule.forRoot({ \r\n            cacheLanguageWiseObject: true, \r\n            globalFilePath: 'assets\/i18n\/{{language-code}}\/global.{{language-code}}.json', \r\n               }) \r\n    ], \r\n    exports: [RxTranslateModule], \r\n}) \r\nexport class RxWebModule { }\r\n\r\n\/\/ Import this RxWebModule in your root module",
            }
        ]
    }
]
