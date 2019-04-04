import {  upperCase, } from   "@rxweb/reactive-form-validators"   

export class Location {

	@upperCase({messageKey:'upperCaseMessageKey' }) 
	streetName: string;
	
	
}
