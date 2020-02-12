import {  toDouble,prop } from   "@rxweb/reactive-forms"   

export class User {

	
	@prop()
	@toDouble() 
	amount: number;
	
}
