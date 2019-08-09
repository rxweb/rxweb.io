import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { ApplicationBroadcaster } from '@rx/core';
import { Router } from '@angular/router';


@Component({
    selector: 'app-why',
    templateUrl: './why-component.html',
   
})
export class WhyRxwebComponent implements OnInit {
  modelSource:string = "assets/images/model2ss.png";
    rightSidebarLinks:any=[{"id":"why-rxweb","title":" Why Rxweb","subLink":null},{"id":"model-based-validation","title":"Model Based Validation"},{"id":"conditional-validation","title":"Conditional Validation"},{"id":"compare-password","title":"Compare Password"},{"id":"simplified-errormessage","title":"Simplified Errormessage"},{"id":"strongly-type","title":"Strongly Typed Reactive Forms"},{"id":"multiple-fileupload","title":"Receive Multiple file upload"},{"id":"unique","title":"Unique Validation"}];
    pageTitle:any = this.rightSidebarLinks[0];
    constructor(private router: Router,private applicationBroadcaster: ApplicationBroadcaster) {
       
    }
    showComponent:boolean = false;
  
    ngOnInit() {          
        this.showComponent = true;
        this.applicationBroadcaster.topSubject.next(this.pageTitle);       
    }
    
    startGif(event){
      var target = event.target || event.srcElement || event.currentTarget;
      var gifImage = event.currentTarget.offsetParent.children[1];
      var idAttr = target.attributes.id.value;
      var imageSource = "assets/images/" + gifImage.id + ".gif";
      gifImage.src = `${imageSource}`    
     var stopId = event.currentTarget.offsetParent.children[2].id;
     document.getElementById(idAttr).style.display = "none";
     document.getElementById(stopId).style.display = "block";
    }
    stopGif(event)
    {
      var target = event.target || event.srcElement || event.currentTarget;
      var idAttr = target.attributes.id.value;
      var startImage = event.currentTarget.offsetParent.children[1]
      var imageSource = "assets/images/" + startImage.id + "ss.png";
      startImage.src = `${imageSource}`    
      var startId = event.currentTarget.offsetParent.children[0].id;
      document.getElementById(startId).style.display = "block";
      document.getElementById(idAttr).style.display = "none";
    }

    scrollEvent(event){
      var i = 200;
      var target = event.currentTarget.getElementsByClassName("col-lg-4");
       Array.prototype.forEach.call(target,element => {   
         console.log(document.body.scrollTop);     
        if(document.body.scrollTop >= i){
         element.children[0].className = "animated fadeInUp";
         element.children[0].style.display = "block";
         element.children[1].className = "animated fadeInUp delay-1s";
         element.children[1].style.display = "block";
         i = i+200;
        }         
      });
    }
    
    
     scrollTo(section) {
         location.hash = section;
         return false;
     }
 
}