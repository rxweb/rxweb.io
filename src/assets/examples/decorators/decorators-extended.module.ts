import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RxReactiveFormsModule, propArray } from '@rxweb/reactive-form-validators';
import { PropObjectAddComponent } from './propObject/add/prop-object-add.component';

import { PropAddComponent } from './prop/add/prop-add.component';
import { PropServerComponent } from './prop/bindingServerProperty/prop-server.component';
import { PropDefaultComponent } from './prop/defaultValue/prop-default.component';
import { PropArrayAddComponent } from './propArray/add/prop-array-add.component';
import { PropArrayDefaultComponent } from './propArray/defaultValue/prop-array-default-component';
import { PropArrayServerComponent } from './propArray/bindingServerProperty/prop-array-server.component';

import { PropObjectDefaultComponent } from './propObject/defaultValue/prop-object-default.component';
import { PropObjectServerComponent } from './propObject/bindingServerProperty/prop-object-server.component';
import { DisableAddComponent } from './disable/add/disable-add.component';
import { ErrorAddComponent } from './error/add/error-add.component';
import { ElementClassAddComponent } from './elementClass/add/element-add.component';
import { ModelAddComponent } from './model/add/model-add.component';
import { PropExcludeComponent } from './prop/excludeProps/prop-exclude.component';
import { ModelExcludeComponent } from './model/excludeProps/model-exclude.component';
import { ModelErrorComponent } from './model/error/model-error.component';
import { ModelElementComponent } from './model/elementClass/model-element.component';
import { PropPrimaryComponent } from './prop/primaryKey/prop-primary.component';
import { PropArrayEntityComponent } from './propArray/entity/prop-array-entity.component';



@NgModule({
  declarations: [
    PropAddComponent,
    PropServerComponent,
  PropArrayAddComponent,
  PropArrayServerComponent,
  PropArrayDefaultComponent,
  PropObjectAddComponent,
  PropObjectDefaultComponent,
  PropObjectServerComponent,
  PropDefaultComponent,
  DisableAddComponent,
  ErrorAddComponent,
  ElementClassAddComponent,
  ModelAddComponent,
  PropExcludeComponent,
  PropPrimaryComponent,
  ModelExcludeComponent,
  ModelErrorComponent,
  ModelElementComponent,
  PropArrayEntityComponent
  ],
entryComponents: [
  PropAddComponent,
    PropServerComponent,
  PropArrayAddComponent,
  PropArrayServerComponent,
  PropArrayDefaultComponent,
  PropObjectAddComponent,
  PropObjectDefaultComponent,
  PropObjectServerComponent,
  PropDefaultComponent,
  PropPrimaryComponent,
  DisableAddComponent,
  ErrorAddComponent,
  ElementClassAddComponent,
  ModelAddComponent,
  PropExcludeComponent,
  ModelExcludeComponent,
  ModelErrorComponent,
  ModelElementComponent,
  PropArrayEntityComponent
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule
  ],
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    PropAddComponent,
    PropArrayAddComponent,
  PropObjectAddComponent,
  PropPrimaryComponent,
  DisableAddComponent,
  ErrorAddComponent,
  ElementClassAddComponent,
  ModelAddComponent,
  PropExcludeComponent,
  ModelExcludeComponent,
  ModelErrorComponent,
  ModelElementComponent,
  PropArrayEntityComponent
  ],

})
export class DecoratorsExtendedModule { }
