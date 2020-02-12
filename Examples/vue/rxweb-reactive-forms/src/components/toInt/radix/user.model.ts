import {  toInt,prop } from   "@rxweb/reactive-forms"   

export class User {

	
	@prop()
	@toInt(10 ) 
	totalAmount: number;
	
}
