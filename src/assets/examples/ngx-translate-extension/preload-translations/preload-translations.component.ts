import { Component } from "@angular/core";
import { translate, RxTranslateModule, RxTranslation } from "@rxweb/translate";
import { Router } from "@angular/router";

@Component({
  templateUrl: "./preload-translations.component.html",
  selector: "app-preload-content-translation"
})
export class PreloadContentTranslationComponent {

  @translate()
  multilingualContent: { [key: string]: any };

}
