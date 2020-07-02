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
import { RXWEB_SANITIZERS_ROUTING } from './rxweb-sanitizers.routing';


@NgModule({
  imports: [RXWEB_SANITIZERS_ROUTING,CommonSharedModule,RxReactiveDynamicFormsModule,RxReactiveFormsModule,CommonModule ,FormsModule, ReactiveFormsModule,RouterModule,RxFormsModule, RxViewModule,ClipboardModule, HighlightModule  ],
  declarations: [],
  providers:[{ provide: "COMPONENT_EXAMPLE", useValue: {} }],
 exports:      [ RouterModule ]
})
export class RxwebSanitizersModule { }
