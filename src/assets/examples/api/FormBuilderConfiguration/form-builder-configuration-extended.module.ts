import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';
import { FormbuilderconfigurationCompleteComponent } from './complete/formbuilderconfiguration-complete.component';
import { FormbuilderconfigurationObjectComponent } from './object/formbuilderconfiguration-object.component';
import { FormbuilderconfigurationArrayobjectComponent } from './arrayobject/formbuilderconfiguration-arrayobject.component';
import { FormbuilderconfigurationIncludepropsComponent } from './includeprops/formbuilderconfiguration-includeprops.component';
import { FormbuilderconfigurationIgnoreundefinedpropsComponent } from './ignoreUndefinedProps/formbuilderconfiguration-ignoreundefinedprops.component';
import { FormbuilderconfigurationDynamicdefaultComponent } from './dynamicDefaultValue/formbuilderconfiguration-dynamic.component';
import { FormbuilderconfigurationAllPropsComponent } from './allProps/formbuilderconfiguration-allprops.component';



@NgModule({
  declarations: [
    FormbuilderconfigurationCompleteComponent,FormbuilderconfigurationObjectComponent,FormbuilderconfigurationArrayobjectComponent,FormbuilderconfigurationIncludepropsComponent,FormbuilderconfigurationIgnoreundefinedpropsComponent,FormbuilderconfigurationDynamicdefaultComponent,FormbuilderconfigurationAllPropsComponent
  ],
entryComponents: [
	FormbuilderconfigurationCompleteComponent,FormbuilderconfigurationObjectComponent,FormbuilderconfigurationArrayobjectComponent,FormbuilderconfigurationIncludepropsComponent,FormbuilderconfigurationIgnoreundefinedpropsComponent,FormbuilderconfigurationDynamicdefaultComponent,FormbuilderconfigurationAllPropsComponent
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule
  ],
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    FormbuilderconfigurationCompleteComponent,FormbuilderconfigurationObjectComponent,FormbuilderconfigurationArrayobjectComponent,FormbuilderconfigurationIncludepropsComponent,FormbuilderconfigurationIgnoreundefinedpropsComponent,FormbuilderconfigurationDynamicdefaultComponent,FormbuilderconfigurationAllPropsComponent
  ],

})
export class  FormBuilderConfigurationExtendedModule { }