import {  alphaNumeric, } from   "@rxweb/reactive-forms"   

export class Location {

	@alphaNumeric({allowWhiteSpace:true }) 
	flatAddress: string;
	
	
}
