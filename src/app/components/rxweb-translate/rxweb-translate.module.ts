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

import { TopBarSharedModule } from '../shared/top-bar/top-bar-shared.module';
import { RXWEB_TRANSLATE_ROUTING } from './rxweb-translate.routing';
import { TranslateGettingStartedComponent } from './getting-started/getting-started.component';
import { LazyLoadComponent } from './lazy-load/lazy-load.component';
import { CodeViewerComponent } from '../shared/code-viewer/code-viewer.component';
import { LazyLoadChildComponent } from './lazy-load/shared/lazy-load-child/lazy-load-child.component';
import { FixedLanguageComponent } from './lazy-load/shared/fixed-language/fixed-language.component';
import { RxTranslateModule } from '@rxweb/translate';

@NgModule({
  imports: [RXWEB_TRANSLATE_ROUTING, CommonSharedModule, TopBarSharedModule, RxReactiveDynamicFormsModule, RxReactiveFormsModule, CommonModule, FormsModule, ReactiveFormsModule, RouterModule, RxFormsModule, RxViewModule, ClipboardModule, HighlightModule, RxTranslateModule],
  declarations: [TranslateGettingStartedComponent, LazyLoadComponent, LazyLoadChildComponent, CodeViewerComponent, FixedLanguageComponent ],
  providers: [{ provide: "COMPONENT_EXAMPLE", useValue: {} }],
  exports: [RouterModule]
})
export class RxwebTranslateModule { }