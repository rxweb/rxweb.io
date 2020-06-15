import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TranslocoComponent } from './transloco/transloco.component';
import { TranslateComponent } from './translate/translate.component';
import { OwnComponent } from './own/own.component';
import { NgxTranslateComponent } from './ngx-translate/ngx-translate.component';
import { Angularl10nComponent } from './angular-l10n/angular-l10n.component';
import { AngularI18NextComponent } from './angular-i18next/angular-i18next.component';
const  I18N_ERROR_MESSAGE_TRANSLATION_ROUTES: Routes = [
  {
    path: 'ngx-translate',
    component: NgxTranslateComponent
  },
  {
    path: 'transloco',
    component: TranslocoComponent
  },
  {
    path: 'angular-l10n',
    component: Angularl10nComponent
  },
  {
    path: 'angular-i18next',
    component: AngularI18NextComponent
  },
  {
    path: 'translate',
    component: TranslateComponent
  },
  {
    path: 'own',
    component: OwnComponent
  }
];
export const  I18N_ERROR_MESSAGE_TRANSLATION_ROUTING: ModuleWithProviders = RouterModule.forChild( I18N_ERROR_MESSAGE_TRANSLATION_ROUTES);