import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { RxReactiveDynamicFormsModule } from '@rxweb/reactive-dynamic-forms';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RxFormsModule } from '@rx/forms';
import { CommonSharedModule } from '../../shared/common/common-shared.module';
import { TopBarSharedModule } from '../../shared/top-bar/top-bar-shared.module';
import { I18N_ERROR_MESSAGE_TRANSLATION_ROUTING } from './i18n-error-message-translation.routing';
import { OwnComponent } from './own/own.component';
import { TranslateComponent } from './translate/translate.component';
import { AngularI18NextComponent } from './angular-i18next/angular-i18next.component';
import { Angularl10nComponent } from './angular-l10n/angular-l10n.component';
import { TranslocoComponent } from './transloco/transloco.component';
import { NgxTranslateComponent } from './ngx-translate/ngx-translate.component';

@NgModule({
  imports: [I18N_ERROR_MESSAGE_TRANSLATION_ROUTING, HttpClientModule,
    CommonSharedModule, TopBarSharedModule, RxReactiveDynamicFormsModule, RxReactiveFormsModule,
    CommonModule, FormsModule, ReactiveFormsModule, RouterModule, RxFormsModule],
  declarations: [
    OwnComponent, TranslateComponent, AngularI18NextComponent, Angularl10nComponent, TranslocoComponent, NgxTranslateComponent
  ],
  exports: [RouterModule],
})
export class I18nErrorMessageTranslationModule { }
