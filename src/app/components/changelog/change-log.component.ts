import { Component, OnInit, HostListener } from '@angular/core';
import { ApplicationBroadcaster } from '@rx/core';

@Component({
    selector: 'app-change-log',
    templateUrl: './change-log.component.html'
})
export class ChangeLogComponent implements OnInit {
    rightSidebarLinks:any=[{"id":"contributors","title":"Change Log","subLink":null},{"id":"contributors","title":"Change Log Information","subLink":null},{"id":"contributors","title":"Change Log Information","subLink":null}];
    pageTitle:any = this.rightSidebarLinks[0];
    showComponent: boolean = false;

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
        document.title = "Change Log - RxWeb Docs";
        this.applicationBroadcaster.topSubject.next(this.pageTitle);
            
        this.showComponent = true;
    }

    scrollTo(section) {
        location.hash = section;
        return false;
    }
}
