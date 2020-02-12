import {  creditCard,prop, } from   "@rxweb/reactive-forms"   

export class User {

	@prop()
	cardType: string;

	@creditCard({fieldName:'cardType' }) 
	creditCardNumber: string;
	
	
}
