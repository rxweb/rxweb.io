import { Component, OnInit, Input, OnChanges, HostListener } from '@angular/core';
import { HttpClient, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Http } from "@angular/http";
import { environment } from 'src/environments/environment';
import { ApplicationBroadcaster } from '@rx/core';


@Component({
  templateUrl: './dynamic-getting-started.component.html',
})

export class DynamicGettingStartedComponent implements OnInit {
    showComponent: boolean = false;
    ngOnInit()
    { 
    this.showComponent = true;
    }
}