import {Component} from '@angular/core';

@Component({
    templateUrl:"./api.component.html",
    selector:'app-api'
})

export class ApiComponent{

    rightSidebarLinks: any = [{ "id": "api", "title": "API", "subLink": null }, { "id": "api", "title": "API", "subLink": null }, { "id": "@translate", "title": "@translate", "subLink": null }, { "id": "rxTranslate", "title": "rxTranslate", "subLink": null }, { "id": "@asyncTranslate", "title": "@asyncTranslate", "subLink": null }, { "id": "RxTranslateModule", "title": "RxTranslateModule", "subLink": null }, { "id": "RxTranslation", "title": "RxTranslation", "subLink": null }]

}