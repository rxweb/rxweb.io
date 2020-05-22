import {Component, Input} from '@angular/core';


@Component({
    templateUrl:'./cli.component.html',
    selector:'app-translate-cli'
})
export class CliComponent {
    rightSidebarLinks: any = [{ "id": "cli", "title": "cli", "subLink": null },];
}