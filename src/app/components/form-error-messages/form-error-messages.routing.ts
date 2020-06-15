import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormErrorMessagesGettingStartedComponent } from './getting-started/getting-started.component';
import { ConditionalErrorMessagingComponent } from './conditional-error-messaging/conditional-error-messaging.component';
import { ErrorMessagePropertyComponent } from './simplified-error-message-binding/error-message-property/error-message-property.component';
import { ErrorMessagesPropertyComponent } from './simplified-error-message-binding/error-messages-property/error-messages-property.component';
import { ErrorsPropertyComponent } from './simplified-error-message-binding/errors-property/errors-property.component';
import { CleanCodeComponent } from './clean-code/clean-code.component';
import { PlaygroundComponent } from './playground/playground.component';
const FORM_ERROR_MESSAGES_ROUTES: Routes = [
  {
    path: 'getting-started',
     component: FormErrorMessagesGettingStartedComponent
  },
  {
    path: 'error-message-strategy',
    loadChildren: 'src/app/components/form-error-messages/error-message-strategy/error-message-strategy.module#ErrorMessagesStrategyModule',
  },
  {
    path: 'conditional-error-messaging',
    component: ConditionalErrorMessagingComponent
  },
  {
    path: 'error-message-property',
    component: ErrorMessagePropertyComponent
  },
  {
    path: 'error-messages-property',
    component: ErrorMessagesPropertyComponent
  },
  {
    path: 'errors-property',
    component: ErrorsPropertyComponent
  },
  {
    path: 'error-message-translation',
    loadChildren: 'src/app/components/form-error-messages/i18n-error-message-translation/i18n-error-message-translation.module#I18nErrorMessageTranslationModule',
  },
  {
    path: 'angular-pipes',
    loadChildren: 'src/app/components/form-error-messages/angular-pipes/angular-pipes.module#AngularPipesModule',
  },
  {
    path: 'clean-code',
    component: CleanCodeComponent
  },
  {
    path: 'playground',
    component: PlaygroundComponent
  }

];
export const FORM_ERROR_MESSAGES_ROUTING: ModuleWithProviders = RouterModule.forChild(FORM_ERROR_MESSAGES_ROUTES);