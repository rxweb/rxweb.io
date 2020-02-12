import {  minDate,prop, } from   "@rxweb/reactive-forms"   

export class User {

	@prop()
	enrollmentDate: string;

	@minDate({fieldName:'enrollmentDate' }) 
	lastRegistrationDate: string;
	
	
}
