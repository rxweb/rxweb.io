import { OnInit, Component, Input, Output, EventEmitter } from '@angular/core';
import { ApplicationBroadcaster } from '@rx/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-link-items',
  templateUrl: './link-item.component.html',
})
export class LinkItemsComponent implements OnInit {
  @Input() links: any;
  @Input() level: number;
  recievedChildSource: string;
  @Output() messageToEmit = new EventEmitter<boolean>();
  messageToSendP: string = "";
  @Input() isOpen: boolean = false;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  getIsOpen(isOpen: boolean) {
    this.isOpen = isOpen;
  }

  navigateTo(link: any): void {
    debugger;
    this.messageToEmit.emit(link.isOpen);
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