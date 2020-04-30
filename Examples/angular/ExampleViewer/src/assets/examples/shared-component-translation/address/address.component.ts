import { Component } from "@angular/core"
import { translate } from '@rxweb/translate'
import { FormGroup, FormBuilder } from "@angular/forms"

@Component({
    selector: "app-address",
    templateUrl: './address.component.html'
})
export class AddressComponent {
    @translate({ translationName: "address" }) 
    multilingualContent: { [key: string]: any };
}
