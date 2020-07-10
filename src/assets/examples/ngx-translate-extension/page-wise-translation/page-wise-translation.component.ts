import { Component } from "@angular/core"
import { translate } from '@rxweb/translate'

@Component({
    templateUrl: './page-wise-translation.component.html',
    selector:'app-page-wise-translation'
})
export class PageWiseTranslationComponent {

    @translate({ translationName: "user" })
    multilingualContent: { [key: string]: any }
}
