import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from "@angular/router";
import { RxReactiveFormsModule,RxDynamicReactiveFormsModule } from "@rxweb/reactive-form-validators";
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './components/start/app.component';
import { SideBarComponent } from './components/shared/side-bar/side-bar.component';
import { TopBarComponent } from './components/shared/top-bar/top-bar.component';
import { APP_LAZY_ROUTING } from './components/start/app.lazy.routing';
import { FooterComponent } from './components/shared/footer/footer.component';
import { ApplicationBroadcaster } from '@rx/core';
import {  NgAisModule } from 'angular-instantsearch';
import { CheckForUpdateService } from './services/check-for-update.service';
import { LogUpdateService } from './services/log-update.service';
import { PromptUpdateService } from './services/prompt-update.service';
import { HomeComponent } from './components/home/home.component';
import { GettingStartedComponent } from './components/getting-started/getting-started.component';
import { WhatsNewComponent } from './components/whats-new/whats-new.component';
import { WhatsNextComponent } from './components/whats-next/whats-next.component';

@NgModule({
  declarations: [
    AppComponent,SideBarComponent,TopBarComponent,FooterComponent,
    HomeComponent,GettingStartedComponent,WhatsNewComponent,WhatsNextComponent
  ],
  imports: [
    BrowserModule, FormsModule, RxReactiveFormsModule, 
    ReactiveFormsModule, HttpModule, HttpClientModule, 
    RouterModule, APP_LAZY_ROUTING, NgAisModule.forRoot(),
  ],
  providers: [ApplicationBroadcaster,CheckForUpdateService,LogUpdateService,PromptUpdateService],
  exports: [RouterModule],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
