import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators } from "@rxweb/reactive-form-validators"

import { FormBuilderConfiguration, RxFormBuilder } from "@rxweb/reactive-form-validators";
import { ApplicationBroadcaster } from "@rx/core";
import { environment } from 'src/environments/environment';
import { element } from '@angular/core/src/render3';
import { Component, OnInit } from '@angular/core';


@Component({
  templateUrl: './angular-home.component.html',
})

export class AngularHomeComponent implements OnInit {


    
  ngOnInit(): void {
  }
}