import { OnInit, Component } from '@angular/core';

@Component({
    templateUrl: './getting-started.component.html',
  })
  export class GettingStartedComponent implements OnInit {
    
    showComponent: boolean = false;
    
    ngOnInit(): void {
        this.showComponent = true;
    }
      
  }