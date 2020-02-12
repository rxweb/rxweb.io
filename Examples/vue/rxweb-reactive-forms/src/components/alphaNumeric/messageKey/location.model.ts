import {  alphaNumeric, } from   "@rxweb/reactive-forms"   

export class Location {

	@alphaNumeric({messageKey:'alphaNumericMessageKey' }) 
	colonyName: string;
	
	
}
