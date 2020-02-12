import {  toFloat,prop } from   "@rxweb/reactive-forms"   

export class User {

	
	@prop()
	@toFloat() 
	amount: number;
	
}
