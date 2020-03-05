import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from '@angular/router';
import { RxFormsModule } from '@rx/forms';
import { RxViewModule } from '@rx/view';
import { HighlightModule } from 'ngx-highlightjs';
import { ClipboardModule } from 'ngx-clipboard';
import { RxReactiveFormsModule } from "@rxweb/reactive-form-validators"
import { RxReactiveDynamicFormsModule } from "@rxweb/reactive-dynamic-forms"
import { CommonSharedModule } from '../shared/common/common-shared.module';

import { TopBarSharedModule } from '../shared/top-bar/top-bar-shared.module';
import { RXWEB_LOCALIZATION_ROUTING } from './rxweb-localization.routing';
import { LocalizationGettingStartedComponent } from './getting-started/getting-started.component';



@NgModule({
  imports: [RXWEB_LOCALIZATION_ROUTING,CommonSharedModule, TopBarSharedModule,RxReactiveDynamicFormsModule,RxReactiveFormsModule,CommonModule ,FormsModule, ReactiveFormsModule,RouterModule,RxFormsModule, RxViewModule,ClipboardModule, HighlightModule  ],
  declarations: [LocalizationGettingStartedComponent],
  providers:[{ provide: "COMPONENT_EXAMPLE", useValue: {} }],
 exports:      [ RouterModule ]
})
export class RxwebLocalizationModule { }
