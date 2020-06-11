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
import { CommonSharedModule } from "src/app/components/shared/common/common-shared.module";
import { TopBarSharedModule } from "src/app/components/shared/top-bar/top-bar-shared.module";
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "../../ngx-translate-extension.module";
import { RxwebSanitizersModule } from "src/app/components/rxweb-sanitizers/rxweb-sanitizers.module";
import { CurrencyComponent } from "./currency/currency.component";
import { RxTranslateSanitizeModule } from "@rxweb/translate";
import { NGX_SANITIZE_ROUTING } from "./sanitize.routing";
import { DateComponent } from "./date/date.component";
import { DecimalComponent } from "./decimal/decimal.component";
import { PercentComponent } from "./percent/percent.component";
import { LowerCaseComponent } from "./lower-case/lower-case.component";
import { UpperCaseComponent } from "./upper-case/upper-case.component";
import { TitleCaseComponent } from "./title-case/title-case.component";
import { CustomComponent } from "./custom/custom.component";

@NgModule({
  imports: [NGX_SANITIZE_ROUTING, HttpClientModule, 
    CommonSharedModule, TopBarSharedModule, RxReactiveDynamicFormsModule, RxReactiveFormsModule,
    CommonModule, FormsModule, ReactiveFormsModule, RouterModule, RxFormsModule, RxViewModule, ClipboardModule, HighlightModule,
  ],
  declarations: [
    CurrencyComponent, DateComponent, DecimalComponent, PercentComponent, LowerCaseComponent, UpperCaseComponent, 
      TitleCaseComponent, CustomComponent
  ],
    providers: [{ provide: "COMPONENT_EXAMPLE", useValue: {} }],
  exports: [RouterModule]
})
export class SanitizeModule {
}
