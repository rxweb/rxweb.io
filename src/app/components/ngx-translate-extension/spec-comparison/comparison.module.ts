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
import { COMPARISION_ROUTING } from "./comparison.routing";
import { CommonSharedModule } from "../../shared/common/common-shared.module";
import { TopBarSharedModule } from "../../shared/top-bar/top-bar-shared.module";
import { MissingTranslationHandlerComponent } from "./missing-translation-handler/missing-translation-handler.component";
import { TranslateCompilerComponent } from "./translate-compiler/translate-compiler.component";
import { TranslateDirectiveComponent } from "./translate-directive/translate-directive.component";
import { TranslateLoaderComponent } from "./translate-loader/translate-loader.component";
import { TranslatePipeComponent } from "./translate-pipe/translate-pipe.component";
import { TranslateServiceComponent } from "./translate-service/translate-service.component";
import { TranslateStoreComponent } from "./translate-store/translate-store.component";
import { TranslateParserComponent } from "./translate-parser/translate-parser.component";

@NgModule({
  imports: [COMPARISION_ROUTING, CommonSharedModule, TopBarSharedModule, RxReactiveDynamicFormsModule, RxReactiveFormsModule,
    CommonModule, FormsModule, ReactiveFormsModule, RouterModule, RxFormsModule, RxViewModule, ClipboardModule, HighlightModule],
  declarations: [
    MissingTranslationHandlerComponent, TranslateCompilerComponent, TranslateDirectiveComponent, TranslateLoaderComponent,
    TranslatePipeComponent, TranslateServiceComponent, TranslateStoreComponent, TranslateParserComponent
  ],
  providers: [{ provide: "COMPONENT_EXAMPLE", useValue: {} }],
  exports: [RouterModule]
})
export class ComparisonModule { }