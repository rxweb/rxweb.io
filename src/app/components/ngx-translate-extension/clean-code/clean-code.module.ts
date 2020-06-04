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
import { ComparingOnPushComponent } from "./on-push/on-push.component";
import { TopBarSharedModule } from "../../shared/top-bar/top-bar-shared.module";
import { CommonSharedModule } from "../../shared/common/common-shared.module";
import { CLEAN_CODE_ROUTING } from "./clean-code.routing";

@NgModule({
  imports: [CLEAN_CODE_ROUTING, HttpClientModule,
    // TranslateModule.forRoot({ loader: { provide: TranslateLoader, useClass: TranslateHttpLoader } }),
    CommonSharedModule, TopBarSharedModule, RxReactiveDynamicFormsModule, RxReactiveFormsModule,
    CommonModule, FormsModule, ReactiveFormsModule, RouterModule, RxFormsModule, RxViewModule, ClipboardModule, HighlightModule,
  ],
  declarations: [
    ComparingOnPushComponent
  ],
  providers: [{ provide: "COMPONENT_EXAMPLE", useValue: {} }],
  exports: [RouterModule]
})
export class CleanCodeModule {
}
