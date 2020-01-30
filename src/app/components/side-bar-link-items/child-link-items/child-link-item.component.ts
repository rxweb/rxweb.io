import { OnInit, Component, Input, Output, EventEmitter } from '@angular/core';
import { ApplicationBroadcaster } from '@rx/core';
import { Http } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { isProceduralRenderer } from '@angular/core/src/render3/interfaces/renderer';
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

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() { }

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