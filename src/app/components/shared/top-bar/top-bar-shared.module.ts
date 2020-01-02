import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RightSideBarComponent } from "src/app/components/shared/right-sidebar/right-sidebar.component";
import { RxReactiveFormsModule } from "@rxweb/reactive-form-validators";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from '@angular/router';
import { TopBarComponent } from './top-bar.component';
import { TitleComponent } from '../title/title.component';
import { NgAisModule } from 'angular-instantsearch';

@NgModule({
 imports:      [ CommonModule,FormsModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule,HttpClientModule,RouterModule, NgAisModule.forRoot(), ],
 declarations: [ TopBarComponent,TitleComponent ],
 exports:      [ TopBarComponent,CommonModule, FormsModule,RouterModule ]
})
export class TopBarSharedModule { }