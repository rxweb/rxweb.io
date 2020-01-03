import { OnInit, Component, Input, Output, EventEmitter } from '@angular/core';
import { ApplicationBroadcaster } from '@rx/core';
import { Http } from '@angular/http';

@Component({
    selector: 'app-child-links',
    templateUrl: './child-link-item.component.html',
  })
  export class ChildLinkItemComponent implements OnInit {
    @Input() links: any;
   @Input() level:any;
    @Output() messageToEmit = new EventEmitter<string>();
  
    messageToSendC: string = "Hello Parent !";
      ngOnInit(){
        console.log(this.level);
      }

      sendSourceToParent(message: string) {
        this.messageToEmit.emit(message)
      }
  }