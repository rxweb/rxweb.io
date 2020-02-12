import {  stripLow,prop } from   "@rxweb/reactive-forms"   

export class User {

	
	@prop()
	@stripLow() 
	freeText: string;
	
}
