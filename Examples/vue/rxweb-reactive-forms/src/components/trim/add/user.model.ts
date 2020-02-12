import {  trim,prop } from   "@rxweb/reactive-forms"   

export class User {

	
	@prop()
	@trim() 
	freeText: string;
	
}
