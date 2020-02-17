import { OnInit, Component, Input } from '@angular/core';
import { ApplicationBroadcaster } from '@rx/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { element } from '@angular/core/src/render3';

@Component({
  selector: 'app-link-items',
  templateUrl: './link-item.component.html',
})
export class LinkItemsComponent implements OnInit {
  @Input() links: any;
  @Input() level: number;
  recievedChildSource: string;
  messageToSendP: string = "";
  @Input() isOpen: boolean = false;
  @Input() isSearch: boolean = false;
  

  constructor(private router: Router) { }

  ngOnInit() {
  
     
    
    
  }

  navigateTo(link: any): void {

    if (link != null && link.uri != null) {
      this.links.forEach(element => {
        element.isActive = false;
        element.isOpen = false;
      });
      link.isActive = true;
      this.router.navigateByUrl(link.uri);
    }
  }
}