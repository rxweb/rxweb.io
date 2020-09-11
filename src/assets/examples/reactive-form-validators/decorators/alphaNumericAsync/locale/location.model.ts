import {  alphaNumericAsync, ValidationAlphabetLocale, } from   "@rxweb/reactive-form-validators"   
import { of } from 'rxjs'; 

export class Location {

	@alphaNumericAsync({validatorConfig:of({locale:ValidationAlphabetLocale.spanish}) })
	spanishcityName: string;
	
	
}
