import { Component, OnChanges, SimpleChanges,  Input, Inject, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ApplicationBroadcaster } from "@rx/core";
import { Router } from "@angular/router";

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
})

export class TopBarComponent  {
  searchvalue1: string
  @ViewChild('search1') searchInput: ElementRef;
  titleData:any = {codeContent:{}};
  constructor(private applicationBroadCaster:ApplicationBroadcaster){
    this.applicationBroadCaster.topSubscriber.subscribe(t=>{
      this.titleData = t;
    })
  }

 
  hideSideBar(): void {
    const body = document.getElementsByTagName('body')[0];
    if (window.innerWidth < 769)
      body.classList.toggle('show-sidebar');
    else
      body.classList.toggle('hide-sidebar');
  }
  showsearchcontent1(event, searchvalue1: string) {
    if (event.key == "Escape")
      this.hideSearch1();
    else {
      if (searchvalue1 != undefined && searchvalue1.length > 0)
        document.getElementById("searchlist-content").style.display = "block";
      else
        this.hideSearch1();
    }
  }
  hideSearch1() {
    setTimeout(() => {
      this.searchInput['searchBox'].nativeElement.value = "";
      this.searchvalue1 = "";
      if(document.getElementById("searchlist-content") != undefined)
        document.getElementById("searchlist-content").style.display = "none";
    },300);
  }
 

}