import { OnInit, Component, Input, Output, EventEmitter } from '@angular/core';
import { ApplicationBroadcaster } from '@rx/core';
import { Http } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-child-links',
  templateUrl: './child-link-item.component.html',
})
export class ChildLinkItemComponent implements OnInit {
  sourceLinks: any;
  @Input() links: any;
  @Input() level: any;
  @Output() messageToEmit = new EventEmitter<string>();
  @Input() isOpen: boolean = false;
  @Input() isSearch :boolean = false;

  constructor(private router: Router, private http: HttpClient) {

  }

  ngOnInit() {
 
   
  }

  hideActive(item: any) {
    item.isActive = false;
    item.isOpen = false;
    if (item.childrens) {
      item.childrens.forEach(element => {
        this.hideActive(element);
      })
    }
  }

  navigateTo(link: any): void {
    this.links.forEach(element => {
      if (element.title != link.title) {  
        // this.hideActive(element);
        element.isActive = false;
        element.isOpen = false;
      }
    });
    if (link != null && link.uri != null) {
      link.isActive = true;
      this.router.navigateByUrl(link.uri);
    }
  }
}