import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

import {RxReactiveDynamicFormsModule} from '@rxweb/reactive-dynamic-forms'


import { IpAsyncCompleteValidatorComponent } from './complete/ip-async-complete.component';
import { IpAsyncVersionValidatorComponent } from './version/ip-async-version.component';
import { IpAsyncIsCidrValidatorComponent } from './isCidr/ip-async-is-cidr.component';
import { IpAsyncMessageValidatorComponent } from './message/ip-async-message.component';
import { IpAsyncMessageKeyValidatorComponent } from './messageKey/ip-async-message-key.component';
import { IpAsyncDynamicValidatorComponent } from './dynamic/ip-async-dynamic.component';
import { IpAsyncAddValidatorComponent } from './add/ip-async-add.component';

@NgModule({
  declarations: [
	IpAsyncCompleteValidatorComponent,
	IpAsyncVersionValidatorComponent,
	IpAsyncIsCidrValidatorComponent,
	IpAsyncMessageValidatorComponent,
	IpAsyncMessageKeyValidatorComponent,
	IpAsyncDynamicValidatorComponent,
	IpAsyncAddValidatorComponent,
  ],
entryComponents: [
	IpAsyncCompleteValidatorComponent,
	IpAsyncVersionValidatorComponent,
	IpAsyncIsCidrValidatorComponent,
	IpAsyncMessageValidatorComponent,
	IpAsyncMessageKeyValidatorComponent,
	IpAsyncDynamicValidatorComponent,
	IpAsyncAddValidatorComponent,
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule,RxReactiveDynamicFormsModule
  ],
  
 
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
	IpAsyncCompleteValidatorComponent,
	IpAsyncVersionValidatorComponent,
	IpAsyncIsCidrValidatorComponent,
	IpAsyncMessageValidatorComponent,
	IpAsyncMessageKeyValidatorComponent,
	IpAsyncDynamicValidatorComponent,
	IpAsyncAddValidatorComponent,
  ],

})
export class  IpAsyncValidatorsExtendedModule { }
