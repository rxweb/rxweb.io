import {  rtrim,prop } from   "@rxweb/reactive-forms"   

export class User {

	
	@prop()
	@rtrim() 
	freeText: string;
	
}
