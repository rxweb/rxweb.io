import {  compose,RxwebValidators } from "@rxweb/reactive-form-validators"
import {AbstractControl} from '@angular/forms';

export class Country {

	@compose({validators:[uniqueCountryName()]}) 
	countryName: string;

}
function uniqueCountryName() {
    return (control: AbstractControl) => {
        if (control.value != "India")
            return null;
        else
            return {
                'uniqueCountry': { message: "Country Name Should be Unique" }
            };
    }
}