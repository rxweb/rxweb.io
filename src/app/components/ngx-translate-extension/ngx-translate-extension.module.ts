import { NGX_TRANSLATE_EXTENSION_ROUTING } from "./ngx-translate-extension.routing";
import { HttpClientModule } from "@angular/common/http"
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
import { TranslateModule, TranslateService } from "@rxweb/ngx-translate-extension";
import { HttpClient } from "@angular/common/http";
import { TranslateLoader } from "@ngx-translate/core";
import { Observable } from 'rxjs';
import { isObject } from 'util';
import { Injectable } from "@angular/core";
import { StructuralDirectiveChildComponent } from "./powerhouse/structural-directive/structural-directive-child/structural-directive-child.component";
@Injectable()
export class TranslateHttpLoader implements TranslateLoader {
    constructor(private http: HttpClient) { }

    public getTranslation(lang: any): Observable<Object> {
        if (isObject(lang) && lang.translationName)
            return this.http.get(`assets/i18n/${lang.translationName}/${lang.lang}.json`);
        return this.http.get(`assets/i18n/${lang}.json`);
    }
}

@NgModule({
    imports: [NGX_TRANSLATE_EXTENSION_ROUTING,HttpClientModule,
        TranslateModule.forRoot({ loader: { provide: TranslateLoader, useClass: TranslateHttpLoader } }),
        CommonSharedModule, TopBarSharedModule, RxReactiveDynamicFormsModule, RxReactiveFormsModule, 
    CommonModule, FormsModule, ReactiveFormsModule, RouterModule, RxFormsModule, RxViewModule, ClipboardModule, HighlightModule],
  declarations: [ 
      NgxTranslateExtensionGettingStartedComponent, ConfidenceComponent, AttributeDirectiveComponent, PipeComponent, StructuralDirectiveComponent, DecoratorComponent, ValidationMessageComponent, StructuralDirectiveChildComponent
  ],
  providers: [{ provide: "COMPONENT_EXAMPLE", useValue: {} }],
  exports: [RouterModule]
})
export class NgxTranslateExtensionModule {
    constructor(public translate: TranslateService) {
        translate.addLangs(['en', 'es', 'fr']);
        translate.setDefaultLang('en');

        const browserLang = translate.getBrowserLang();
        translate.use('en');
    }
}
