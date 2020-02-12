import {  upperCase, } from   "@rxweb/reactive-forms"   

export class Location {

	@upperCase({messageKey:'upperCaseMessageKey' }) 
	streetName: string;
	
	
}
