import { NGX_TRANSLATE_EXTENSION_ROUTING } from "./ngx-translate-extension.routing";
import { CommonSharedModule } from "../shared/common/common-shared.module";
import { TopBarSharedModule } from "../shared/top-bar/top-bar-shared.module";
import { RxReactiveDynamicFormsModule } from "@rxweb/reactive-dynamic-forms";
import { RxReactiveFormsModule } from "@rxweb/reactive-form-validators";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { RxFormsModule } from "@rx/forms";
import { RxViewModule } from "@rx/view";
import { ClipboardModule } from "ngx-clipboard";
import { HighlightModule } from "ngx-highlightjs";
import { MissingTranslationHandlerComponent } from "./comparison/missing-translation-handler/missing-translation-handler.component";
import { NgModule } from "@angular/core";
import { TranslateCompilerComponent } from "./comparison/translate-compiler/translate-compiler.component";
import { TranslateDirectiveComponent } from "./comparison/translate-directive/translate-directive.component";
import { TranslateLoaderComponent } from "./comparison/translate-loader/translate-loader.component";
import { TranslatePipeComponent } from "./comparison/translate-pipe/translate-pipe.component";
import { TranslateServiceComponent } from "./comparison/translate-service/translate-service.component";
import { TranslateStoreComponent } from "./comparison/translate-store/translate-store.component";
import { TranslateParserComponent } from "./comparison/translate-parser/translate-parser.component";
import { NgxTranslateExtensionGettingStartedComponent } from "./getting-started/getting-started.component";
import { ConfidenceComponent } from "./confidence/confidence.component";
import { AttributeDirectiveComponent } from "./powerhouse/attribute-directive/attribute-directive.component";
import { PipeComponent } from "./powerhouse/pipe/pipe.component";
import { StructuralDirectiveComponent } from "./powerhouse/structural-directive/structural-directive.component";
import { DecoratorComponent } from "./powerhouse/decorator/decorator.component";
import { ValidationMessageComponent } from "./powerhouse/validation-message/validation-message.component";

@NgModule({
  imports: [NGX_TRANSLATE_EXTENSION_ROUTING, CommonSharedModule, TopBarSharedModule, RxReactiveDynamicFormsModule, RxReactiveFormsModule, 
    CommonModule, FormsModule, ReactiveFormsModule, RouterModule, RxFormsModule, RxViewModule, ClipboardModule, HighlightModule],
  declarations: [ 
    NgxTranslateExtensionGettingStartedComponent, ConfidenceComponent, AttributeDirectiveComponent, PipeComponent, StructuralDirectiveComponent, DecoratorComponent, ValidationMessageComponent,
  ],
  providers: [{ provide: "COMPONENT_EXAMPLE", useValue: {} }],
  exports: [RouterModule]
})
export class NgxTranslateExtensionModule { }