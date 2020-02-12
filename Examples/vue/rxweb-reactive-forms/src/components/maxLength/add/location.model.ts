import {  maxLength, } from   "@rxweb/reactive-forms"   

export class Location {

	@maxLength({value:10 }) 
	firstName: string;
	
	
}
