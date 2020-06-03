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
import { PowerhouseAttributeDirectiveComponent } from "./powerhouse/attribute-directive/attribute-directive.component";
import { PowerhousePipeComponent } from "./powerhouse/pipe/pipe.component";
import { PowerhouseStructuralDirectiveComponent } from "./powerhouse/structural-directive/structural-directive.component";
import { PowerhouseDecoratorComponent } from "./powerhouse/decorator/decorator.component";
import { PowerhouseValidationMessageComponent } from "./powerhouse/validation-message/validation-message.component";
import { TranslateModule, TranslateService } from "@rxweb/ngx-translate-extension";
import { HttpClient } from "@angular/common/http";
import { TranslateLoader } from "@ngx-translate/core";
import { Observable } from 'rxjs';
import { isObject } from 'util';
import { Injectable } from "@angular/core";
import { PowerhouseStructuralDirectiveChildComponent } from "./powerhouse/structural-directive/structural-directive-child/structural-directive-child.component";
import { ChangeLanguageComponent } from "./playground/change-language/change-language.component";
import { PlayGroundComponent } from "./playground/playground.component";
import { AttributeDirectiveComponent } from "./playground/attribute-directive/attribute-directive.component";
import { DecoratorComponent } from "./playground/decorator/decorator.component";
import { OtherIntuitiveFeatureComponent } from "./playground/other-intuitive-features/other-intuitive-features.component";
import { PipeComponent } from "./playground/pipe/pipe.component";
import { PreLoadModuleComponent } from "./playground/pre-load-module/pre-load-module.component";
import { StructuralDirectiveComponent } from "./playground/structural-directive/structural-directive.component";
import { ValidationMessageComponent } from "./playground/validation-message/validation-message.component";
import { RxTranslateModule } from "@rxweb/translate";
import { CountryService } from "./playground/service/country.service";
@Injectable()
export class TranslateHttpLoader implements TranslateLoader {
    constructor(private http: HttpClient) { }

    public getTranslation(lang: any): Observable<Object> {
        if (lang && lang.translationName && !lang.filePath)
            return this.http.get(`assets/i18n/${lang.translationName}/${lang.lang}.json`);
        else if (lang && lang.filePath)
            return this.http.get(lang.filePath);
        return this.http.get(`assets/i18n/${lang}.json`);
    }
}
@NgModule({
    imports: [NGX_TRANSLATE_EXTENSION_ROUTING, HttpClientModule,
        TranslateModule.forRoot({ loader: { provide: TranslateLoader, useClass: TranslateHttpLoader } }),
        CommonSharedModule, TopBarSharedModule, RxReactiveDynamicFormsModule, RxReactiveFormsModule,
        CommonModule, FormsModule, ReactiveFormsModule, RouterModule, RxFormsModule, RxViewModule, ClipboardModule, HighlightModule,
    ],
    declarations: [
        NgxTranslateExtensionGettingStartedComponent, ConfidenceComponent, PowerhouseAttributeDirectiveComponent, PowerhousePipeComponent,
        PowerhouseStructuralDirectiveComponent, PowerhouseDecoratorComponent, PowerhouseValidationMessageComponent, PowerhouseStructuralDirectiveChildComponent,
        PlayGroundComponent, ChangeLanguageComponent, AttributeDirectiveComponent, DecoratorComponent, OtherIntuitiveFeatureComponent, PipeComponent,
        PreLoadModuleComponent, StructuralDirectiveComponent, ValidationMessageComponent
    ],
    providers: [{ provide: "COMPONENT_EXAMPLE", useValue: {} }, CountryService],
    exports: [RouterModule]
})
export class NgxTranslateExtensionModule {
}
