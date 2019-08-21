import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from "@angular/router";
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

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
import { ClipboardModule } from 'ngx-clipboard';
import { HighlightModule } from 'ngx-highlightjs';
import { TitleComponent } from './components/shared/title/title.component';
import {RxReactiveDynamicFormsModule} from '@rxweb/reactive-dynamic-forms'
import {RxReactiveFormsModule} from "@rxweb/reactive-form-validators";
import { DynamicValidationComponent } from './components/dynamic-validation/dynamic-validation.component';


@NgModule({
  declarations: [
    AppComponent,SideBarComponent,TopBarComponent,FooterComponent,DynamicValidationComponent,
    HomeComponent,GettingStartedComponent,WhatsNewComponent,WhatsNextComponent, TitleComponent
  ],
  imports: [
    BrowserModule, FormsModule, ClipboardModule, HighlightModule.forRoot({ theme: 'default' }),
    ReactiveFormsModule, HttpModule, HttpClientModule,
    RouterModule, APP_LAZY_ROUTING, NgAisModule.forRoot(),BrowserAnimationsModule,RxReactiveDynamicFormsModule,RxReactiveFormsModule
  ],
  providers: [ApplicationBroadcaster, CheckForUpdateService, LogUpdateService, PromptUpdateService],
  exports: [RouterModule],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
