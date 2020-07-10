import {  alphaNumeric,ValidationAlphabetLocale } from   "@rxweb/reactive-form-validators"   

export class Location {

	@alphaNumeric({locale:ValidationAlphabetLocale.spanish }) 
	spanishcityName: string;
	
	
}
