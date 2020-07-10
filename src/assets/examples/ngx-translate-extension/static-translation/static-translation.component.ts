import { Component } from "@angular/core"
import { translate } from '@rxweb/translate'

@Component({
    templateUrl: './static-translation.component.html',
    selector:'app-static-translation'
})
export class StaticTranslationComponent {

    @translate() global: { [key: string]: any }

}
