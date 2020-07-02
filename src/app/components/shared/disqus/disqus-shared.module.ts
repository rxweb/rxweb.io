import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from "@angular/forms";
import { ContributionComponent } from './contribution/contribution.component';
import { RouterModule } from '@angular/router';

@NgModule({
 imports:      [ CommonModule ,FormsModule, ReactiveFormsModule,RouterModule],
 declarations: [ ContributionComponent ],
 exports:      [ CommonModule, FormsModule,ContributionComponent,RouterModule ]
})
export class DisqusSharedModule { }