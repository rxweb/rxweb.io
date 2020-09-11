import {  alphaNumericAsync, ValidationAlphabetLocale, } from   "@rxweb/reactive-form-validators"   
import { of } from 'rxjs'; 

export class Location {

	@alphaNumericAsync() 
	areaName: string;
	
	
	@alphaNumericAsync({validatorConfig:of({allowWhiteSpace:true}) })
	flatAddress: string;
	
	
	@alphaNumericAsync({validatorConfig:of({locale:ValidationAlphabetLocale.spanish}) })
	spanishcityName: string;
	
	
	//Shows custom message
	@alphaNumericAsync({validatorConfig:of({message:'Please enter only alphanumerics, special characters are not allowed.'}) })
	postalAddress: string;
	
	
	@alphaNumericAsync({validatorConfig:of({messageKey:'alphaNumericMessageKey'}) })
	colonyName: string;
	
	
}
