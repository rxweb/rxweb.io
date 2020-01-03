import { OnInit, Component, Input } from '@angular/core';
import { ApplicationBroadcaster } from '@rx/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

@Component({
    selector: 'app-link-items',
    templateUrl: './link-item.component.html',
  })
  export class LinkItemsComponent implements OnInit {
      @Input() links:any;
      @Input() level :number;
      recievedChildSource:string;
      messageToSendP:string = "";

       constructor(private router:Router){}
      
      ngOnInit(){
       
       console.log(this.level);
      }

      sendSourceToChild(message:string){
        this.messageToSendP = message;
      }

      getMessage(message: string) {
        this.recievedChildSource = message;
      }
      navigateTo(link: any): void {
        if (link != null && link.uri != null) {
          this.links.forEach(element => {
            element.isActive = false;
            element.isOpen = false;
            if (element.childrens && element.childrens.length > 0) {
              element.childrens.forEach(subElement => {
                subElement.isActive = false;
                subElement.isOpen = false;
                if (subElement.childrens && subElement.childrens.length > 0) {
                  subElement.childrens.forEach(thirdElement => {
                    thirdElement.isActive = false;
                    thirdElement.isOpen = false;
                    if (thirdElement.childrens && thirdElement.childrens.length > 0) {
                      thirdElement.childrens.forEach(fourthElement => {
                        fourthElement.isActive = false;
                        fourthElement.isOpen = false;
                      })
                    }
                  });
                }
    
              })
            }
          });
         
          link.isActive = true;
          this.router.navigateByUrl(link.uri);
    
        }
        else
    
          if (link.href != null) {
            this.links.forEach(element => {
              element.isActive = false;
              element.isOpen = false;
              if (element.childrens && element.childrens.length > 0) {
                element.childrens.forEach(subElement => {
                  subElement.isActive = false;
                  subElement.isOpen = false;
                  if (subElement.childrens && subElement.childrens.length > 0) {
                    subElement.childrens.forEach(thirdElement => {
                      thirdElement.isActive = false;
                      thirdElement.isOpen = false;
                      if (thirdElement.childrens && thirdElement.childrens.length > 0) {
                        thirdElement.childrens.forEach(fourthElement => {
                          fourthElement.isActive = false;
                          fourthElement.isOpen = false;
                        })
                      }
                    });
                  }
    
                })
              }
            });
         
            link.isActive = true;
    
            this.router.navigateByUrl(link.href)
          }
      }
  }