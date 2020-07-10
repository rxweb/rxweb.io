import { Component } from "@angular/core";
import { translate, RxTranslateModule,RxTranslation } from "@rxweb/translate";
import { Router } from "@angular/router";

@Component({
  templateUrl: "./programmable-content-translation.component.html",
  selector:"app-progammable-content-translation"
})
export class ProgrammableContentTranslationComponent {
  
  @translate({ translationName: "login" })
  multilingualContent: { [key: string]: any };
  
  constructor(private rxTranslation: RxTranslation) {  }

  navigate(languageCode: string) {
    this.rxTranslation.change(languageCode);
  }
}
