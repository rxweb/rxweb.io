import { OnInit, Component } from '@angular/core';
import { ApplicationBroadcaster } from '@rx/core';

@Component({
    templateUrl: './home.component.html'
  })
  export class HomeComponent implements OnInit {

    isAnimated: boolean = false;
    
    constructor(private applicationBroadcast:ApplicationBroadcaster) {}

    ngOnInit(): void {
        window.setTimeout(() => { this.isAnimated = true },500)
        this.applicationBroadcast.urlBroadCast(true);
    }

  }