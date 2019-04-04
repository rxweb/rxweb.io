import {  alphaNumeric, } from   "@rxweb/reactive-form-validators"   

export class Location {

	@alphaNumeric({messageKey:'alphaNumericMessageKey' }) 
	colonyName: string;
	
	
}
