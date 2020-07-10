import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PageModule } from "src/app/components/page/page.module";
import { TRANSLATE_ROUTING } from './translate.routing';
import { BindingComponent } from './binding/binding.component';

import { TopBarComponent } from '../shared/top-bar/top-bar.component';
import { AppCodeComponent } from '../shared/app-code/app-code.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';

import { TopBarSharedModule } from '../shared/top-bar/top-bar-shared.module';
import { CommonSharedModule } from '../shared/common/common-shared.module';
import { TranslationStrategyComponent } from './translation-strategy/translation-strategy.component';
import { ContentTranslationComponent } from './content-translation/content-translation.component';

import { RxTranslateModule } from '@rxweb/translate';

import { ApiComponent } from './api/api.component';
import { ComparisonComponent } from './comparison/comparison.component';
import { StaticTranslationComponent } from 'src/assets/examples/ngx-translate-extension/static-translation/static-translation.component';
import { ScopedTranslationComponent } from 'src/assets/examples/ngx-translate-extension/scoped-translation/scoped-translation.component';
import { ConditionalScopedTranslationComponent } from 'src/assets/examples/ngx-translate-extension/conditional-scoped-translation/conditional-scoped-translation.component';
import { BindingByKeyNameComponent } from 'src/assets/examples/ngx-translate-extension/binding-by-key-name/binding-by-key-name.component';
import { AsyncTranslationComponent } from 'src/assets/examples/ngx-translate-extension/async-translation/async-translation.component';
import { OnDemandTranslationComponent } from 'src/assets/examples/ngx-translate-extension/on-demand-translation/on-demand-translation.component';
import { PreloadContentTranslationComponent } from 'src/assets/examples/ngx-translate-extension/preload-translations/preload-translations.component';
import { SharedTranslationComponent } from 'src/assets/examples/ngx-translate-extension/shared-component-translation/shared-component-translation.component';
import { ContentTranslationByUrlComponent } from 'src/assets/examples/ngx-translate-extension/content-translation-by-url/content-translation-by-url.component';
import { ProgrammableContentTranslationComponent } from 'src/assets/examples/ngx-translate-extension/programmable-content-translation/programmable-content-translation.component';
import { FixedLanguageTranslationComponent } from 'src/assets/examples/ngx-translate-extension/fixed-language-translation/fixed-langugae-translation.component';
import { AddressComponent } from 'src/assets/examples/ngx-translate-extension/shared-component-translation/address/address.component';
import { PageWiseTranslationComponent } from 'src/assets/examples/ngx-translate-extension/page-wise-translation/page-wise-translation.component';
@NgModule({
  imports: [TRANSLATE_ROUTING, PageModule, FormsModule, ReactiveFormsModule, CommonModule, TopBarSharedModule, CommonSharedModule,
    RxTranslateModule.forRoot({
      cacheLanguageWiseObject: true,
      globalFilePath: "assets/i18n/{{language-code}}/global.{{language-code}}.json",
      filePath: "assets/i18n/{{language-code}}/{{translation-name}}.{{language-code}}.json"
    })
  ],
  declarations: [BindingComponent,StaticTranslationComponent, ScopedTranslationComponent, ConditionalScopedTranslationComponent,
    BindingByKeyNameComponent, AsyncTranslationComponent, OnDemandTranslationComponent, TranslationStrategyComponent, ContentTranslationComponent,
    ContentTranslationByUrlComponent,SharedTranslationComponent,PreloadContentTranslationComponent,PageWiseTranslationComponent,
    ProgrammableContentTranslationComponent, FixedLanguageTranslationComponent, AddressComponent, ApiComponent, ComparisonComponent
  ],
  exports: [RouterModule],
  entryComponents: [AppCodeComponent]
})
export class TranslateModule { }
