import {  alphaNumericAsync, } from   "@rxweb/reactive-form-validators"   
import { of } from 'rxjs'; 

export class Location {

	//Shows custom message
	@alphaNumericAsync({validatorConfig:of({message:'Please enter only alphanumerics, special characters are not allowed.'}) })
	postalAddress: string;
	
	
}
