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
import { ConfigurationComponent } from "./configuration/configuration.component";
import { HomeComponent } from "./home/home.component";
import { ScopeSharingComponent } from "./scope-sharing/scope-sharing.component";
import { MultiLangsComponent } from "./multi-langs/multi-langs.component";
import { TranspilersComponent } from "./transpilers/transpilers.component";
import { LazyComponent } from "./lazy/lazy.component";
import { InlineLoadersComponent } from "./inline-loaders/inline-loaders.component";
import { DynamicTranslationComponent } from "./dynamic-translation/dynamic-translation.component";

@NgModule({
  imports: [CLEAN_CODE_ROUTING, HttpClientModule,
    // TranslateModule.forRoot({ loader: { provide: TranslateLoader, useClass: TranslateHttpLoader } }),
    CommonSharedModule, TopBarSharedModule, RxReactiveDynamicFormsModule, RxReactiveFormsModule,
    CommonModule, FormsModule, ReactiveFormsModule, RouterModule, RxFormsModule, RxViewModule, ClipboardModule, HighlightModule,
  ],
  declarations: [
    HomeComponent,ConfigurationComponent,ScopeSharingComponent,MultiLangsComponent,TranspilersComponent,LazyComponent, InlineLoadersComponent, DynamicTranslationComponent
  ],
  providers: [{ provide: "COMPONENT_EXAMPLE", useValue: {} }],
  exports: [RouterModule]
})
export class CleanCodeModule {
}
