import { Component, OnChanges, SimpleChanges, OnInit, Input, EventEmitter } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';



@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  
})

export class FooterComponent implements OnInit{
  isHome = false;
  constructor(
    private router: Router
  ) {
   
  }
  showComponent:boolean = false;

  ngOnInit(){

      if(this.router.url.includes("home") || this.router.url.includes("angular-home")){
        this.isHome = true;
      }
      else {
        this.isHome = false;
      }
    this.showComponent = true;
  }
}

