import {  factor,prop, } from   "@rxweb/reactive-forms"   

export class User {

	@prop()
	firstNumber: number;

	@factor({fieldName:'firstNumber' }) 
	fifthNumber: number;
	
	
}
