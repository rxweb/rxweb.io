import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FORM_ERROR_MESSAGES_ROUTING } from './form-error-messages.routing';
import { FormErrorMessagesGettingStartedComponent } from './getting-started/getting-started.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonSharedModule } from '../shared/common/common-shared.module';
import { TopBarSharedModule } from '../shared/top-bar/top-bar-shared.module';
import { RxReactiveDynamicFormsModule } from '@rxweb/reactive-dynamic-forms';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RxFormsModule } from '@rx/forms';
import { ConditionalErrorMessagingComponent } from './conditional-error-messaging/conditional-error-messaging.component';
import { ErrorMessagePropertyComponent } from './simplified-error-message-binding/error-message-property/error-message-property.component';
import { ErrorMessagesPropertyComponent } from './simplified-error-message-binding/error-messages-property/error-messages-property.component';
import { ErrorsPropertyComponent } from './simplified-error-message-binding/errors-property/errors-property.component';
import { CleanCodeComponent } from './clean-code/clean-code.component';
import { PlaygroundComponent } from './playground/playground.component';

@NgModule({
  imports: [FORM_ERROR_MESSAGES_ROUTING, HttpClientModule,
    CommonSharedModule, TopBarSharedModule, RxReactiveDynamicFormsModule, RxReactiveFormsModule,
    CommonModule, FormsModule, ReactiveFormsModule, RouterModule, RxFormsModule],
  declarations: [FormErrorMessagesGettingStartedComponent, ConditionalErrorMessagingComponent, ErrorMessagePropertyComponent, ErrorMessagesPropertyComponent,
    ErrorsPropertyComponent, CleanCodeComponent, PlaygroundComponent
  ],
  exports: [RouterModule],
})
export class FormErrorMessagesModule { }
