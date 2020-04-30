import { Component } from "@angular/core"
import { translate } from '@rxweb/translate'

@Component({
    templateUrl: './scoped-translation.component.html',
    selector: 'app-scoped-translation'
})
export class ScopedTranslationComponent {

    @translate() global: { [key: string]: any }

    freeText: string ="India";
}
