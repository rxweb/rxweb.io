import { Component, OnInit, HostListener } from '@angular/core';
import { ApplicationBroadcaster } from '@rx/core';

@Component({
    selector: 'app-change-log',
    templateUrl: './change-log.component.html'
})
export class ChangeLogComponent implements OnInit {
    showComponent: boolean = false;
    pageTitle: any = { "title": "Change Log", "subLink": null }
    constructor(private applicationBroadcaster: ApplicationBroadcaster) {
    }
    activeTab = 'search';

    search(activeTab) {
        this.activeTab = activeTab;

    }

    result(activeTab) {
        this.activeTab = activeTab;

    }
    ngOnInit() {
        this.applicationBroadcaster.topSubject.next(this.pageTitle);
        this.showComponent = true;
    }

    scrollTo(section) {
        location.hash = section;
        return false;
    }
}
