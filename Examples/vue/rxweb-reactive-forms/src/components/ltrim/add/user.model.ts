import {  ltrim,prop } from   "@rxweb/reactive-forms"   

export class User {

	
	@prop()
	@ltrim() 
	freeText: string;
	
}
