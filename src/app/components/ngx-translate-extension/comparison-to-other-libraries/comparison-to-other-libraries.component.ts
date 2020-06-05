import {Component, Input} from '@angular/core';


@Component({
    templateUrl:'./comparison-to-other-libraries.component.html',
    selector:'app-translate-comparsion'
})
export class ComparsionToOtherLibrariesComponent {
    rightSidebarLinks: any = [{ "id": "cli", "title": "cli", "subLink": null },];
}