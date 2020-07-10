import { Component } from "@angular/core"
import { translate } from '@rxweb/translate'
import { FormGroup, FormBuilder } from "@angular/forms"

@Component({
    selector: "app-shared-translation",
    templateUrl: './shared-component-translation.component.html'
})
export class SharedTranslationComponent {
    @translate({ translationName: "user" })
    multilingualContent: { [key: string]: any };

    submit() {
        console.log('Submit called!')
      }
}
