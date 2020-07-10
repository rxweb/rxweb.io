import { Component } from "@angular/core"
import { translate, RxTranslation } from '@rxweb/translate'
import { Router } from '@angular/router';

@Component({
    templateUrl: './fixed-language-translation.component.html',
    selector:'app-fixed-language-translation'
})
export class FixedLanguageTranslationComponent {
    
    @translate({ translationName: "login",language:"fr" })
    multilingualContent: { [key: string]: any } 

}
