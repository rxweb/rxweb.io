import {  alphaAsync,ValidationAlphabetLocale } from   "@rxweb/reactive-form-validators"   
import { of } from 'rxjs'; 

export class AddressInfo {

	@alphaAsync({validatorConfig:of({locale:ValidationAlphabetLocale.spanish}) })
	spanishcityName: string;
	
	
}
