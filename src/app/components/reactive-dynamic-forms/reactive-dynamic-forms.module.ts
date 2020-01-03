import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from '@angular/router';
import { REACTIVE_DYNAMIC_FORMS_ROUTING } from './reactive-dynamic-forms.routing';
import { RxFormsModule } from '@rx/forms';
import { RxViewModule } from '@rx/view';
import { HighlightModule } from 'ngx-highlightjs';
import { ClipboardModule } from 'ngx-clipboard';
import { DynamicFormHomeComponent } from "./home/home.component"
import { DynamicValidationComponent } from '../dynamic-validation/dynamic-validation.component';
import { RxReactiveFormsModule } from "@rxweb/reactive-form-validators"
import { RxReactiveDynamicFormsModule } from "@rxweb/reactive-dynamic-forms"
import { DynamicGettingStartedComponent } from './getting-started/getting-started.component';
import { CommonSharedModule } from '../shared/common/common-shared.module';
import { FormBuilderDynamicComponent } from './dynamic-form-builder/dynamic-form-builder.component';
import { TopBarSharedModule } from '../shared/top-bar/top-bar-shared.module';

@NgModule({
  imports: [REACTIVE_DYNAMIC_FORMS_ROUTING,CommonSharedModule,TopBarSharedModule, RxReactiveDynamicFormsModule,RxReactiveFormsModule,CommonModule ,FormsModule, ReactiveFormsModule,RouterModule,RxFormsModule, RxViewModule,ClipboardModule, HighlightModule  ],
  declarations: [FormBuilderDynamicComponent,DynamicFormHomeComponent, DynamicValidationComponent,DynamicGettingStartedComponent],
  providers:[{ provide: "COMPONENT_EXAMPLE", useValue: {} }],
 exports:      [ RouterModule ]
})
export class ReactiveDynamicFormsModule { }
