import { HttpClientModule } from "@angular/common/http"
import { RxReactiveDynamicFormsModule } from "@rxweb/reactive-dynamic-forms";
import { RxReactiveFormsModule } from "@rxweb/reactive-form-validators";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { RxFormsModule } from "@rx/forms";
import { RxViewModule } from "@rx/view";
import { ClipboardModule } from "ngx-clipboard";
import { HighlightModule } from "ngx-highlightjs";
import { NgModule } from "@angular/core";

import { TopBarSharedModule } from "../../shared/top-bar/top-bar-shared.module";
import { CommonSharedModule } from "../../shared/common/common-shared.module";
import { CLEAN_CODE_ROUTING } from "./clean-code.routing";
import { HomeComponent } from './transloco/home/home.component';
import { LazyComponent } from './transloco/lazy/lazy.component';
import { InlineLoadersComponent } from './transloco/inline-loaders/inline-loaders.component';
import { DynamicTranslationComponent } from './transloco/dynamic-translation/dynamic-translation.component';
import { ConfigurationComponent } from './transloco/configuration/configuration.component';
import { ScopeSharingComponent } from './transloco/scope-sharing/scope-sharing.component';
import { MultiLangsComponent } from './transloco/multi-langs/multi-langs.component';
import { TranspilersComponent } from './transloco/transpilers/transpilers.component';
import { CleanCodeAngularComparisonComponent } from "./angular-i18n/home/home.component";
import { ApiAngularComparisonComponent } from "./angular-i18n/home/api/api.component";
import { PipeAngularComparisonComponent } from "./angular-i18n/home/pipe/pipe.component";
import { DirectiveAngularComparisonComponent } from "./angular-i18n/home/directive/directive.component";
import { LazyComparisonComponent } from "./angular-i18n/lazy/lazy.component";
import { OnPushComparisonComponent } from "./angular-i18n/on-push/on-push.component";
import { ValidationComparisonComponent } from "./angular-i18n/validation/validation.component";


@NgModule({
  imports: [CLEAN_CODE_ROUTING, HttpClientModule,
    // TranslateModule.forRoot({ loader: { provide: TranslateLoader, useClass: TranslateHttpLoader } }),
    CommonSharedModule, TopBarSharedModule, RxReactiveDynamicFormsModule, RxReactiveFormsModule,
    CommonModule, FormsModule, ReactiveFormsModule, RouterModule, RxFormsModule, RxViewModule, ClipboardModule, HighlightModule,
  ],
  declarations: [
    HomeComponent,ValidationComparisonComponent,OnPushComparisonComponent,ConfigurationComponent,LazyComparisonComponent,DirectiveAngularComparisonComponent, PipeAngularComparisonComponent,ApiAngularComparisonComponent,CleanCodeAngularComparisonComponent,ScopeSharingComponent,MultiLangsComponent,TranspilersComponent,LazyComponent, InlineLoadersComponent, DynamicTranslationComponent
  ],
  providers: [{ provide: "COMPONENT_EXAMPLE", useValue: {} }],
  exports: [RouterModule]
})
export class CleanCodeModule {
}
