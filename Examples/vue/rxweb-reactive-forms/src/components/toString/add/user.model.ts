import {  toString,prop } from   "@rxweb/reactive-forms"   

export class User {

	
	@prop()
	@toString() 
	freeText: string;
	
}
