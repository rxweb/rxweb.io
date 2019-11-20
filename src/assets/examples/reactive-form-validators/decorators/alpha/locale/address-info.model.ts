import {  alpha, ValidationAlphabetLocale} from   "@rxweb/reactive-form-validators"   

export class AddressInfo {

	@alpha({locale:ValidationAlphabetLocale.spanish }) 
	spanishcityName: string;
	
	
}
