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
import { NgModule } from "@angular/core";
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
import { RxTranslateModule, RxTranslateSanitizeModule } from "@rxweb/translate";
import { CountryService } from "./playground/service/country.service";
import { CliComponent } from "./cli/cli.component";
import { PowerhouseChangeLanguageComponent } from "./powerhouse/change-language/change-language.component";
import { PowerhouseOtherIntruitiveFeaturesComponent } from "./powerhouse/other-intuitive-features/other-intuitive-features.component";
import { ComparsionToOtherLibrariesComponent } from "./comparison-to-other-libraries/comparison-to-other-libraries.component";
import { SanitizeComponent } from "./playground/sanitize/sanitize.component";
import { PowerhouseSanitizeComponent } from "./powerhouse/sanitize/sanitize.component";
import { PowerhousePurePipeComponent } from "./powerhouse/pure-pipe/pure-pipe.component";
import { PurePipeComponent } from "./playground/pure-pipe/pure-pipe.component";
import { NgxCodeComponent } from "./code/code.component";
import { ComparisonComponent } from "./comparison/comparison.component";
import { TranslateCleanCodeComponent } from "./translate-clean-code/translate-clean-code.component";

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
        
        CommonSharedModule, TopBarSharedModule, RxReactiveDynamicFormsModule, RxReactiveFormsModule,
        CommonModule, FormsModule, ReactiveFormsModule, RouterModule, RxFormsModule, RxViewModule, ClipboardModule, HighlightModule, TranslateModule
    ],
    declarations: [
        CliComponent, ComparsionToOtherLibrariesComponent, ComparisonComponent, TranslateCleanCodeComponent, 
        NgxTranslateExtensionGettingStartedComponent, ConfidenceComponent, PowerhouseAttributeDirectiveComponent, PowerhousePipeComponent,
        PowerhouseStructuralDirectiveComponent, PowerhouseDecoratorComponent, PowerhouseValidationMessageComponent, PowerhouseStructuralDirectiveChildComponent,
        PlayGroundComponent, ChangeLanguageComponent, AttributeDirectiveComponent, DecoratorComponent, OtherIntuitiveFeatureComponent, PipeComponent,
        StructuralDirectiveComponent, ValidationMessageComponent, PowerhouseChangeLanguageComponent, NgxCodeComponent,
        PowerhouseOtherIntruitiveFeaturesComponent, SanitizeComponent, PowerhouseSanitizeComponent, PowerhousePurePipeComponent, PurePipeComponent
    ],
    providers: [{ provide: "COMPONENT_EXAMPLE", useValue: {} }, CountryService],
    exports: [RouterModule]
})
export class NgxTranslateExtensionModule {
    constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'es', 'fr']);
    translate.setDefaultLang('en');
    translate.use('en');
  }
}
