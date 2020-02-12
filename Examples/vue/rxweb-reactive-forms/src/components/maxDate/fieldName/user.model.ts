import {  maxDate,prop, } from   "@rxweb/reactive-forms"   

export class User {

	@prop()
	enrollmentDate: string;

	@maxDate({fieldName:'enrollmentDate' }) 
	lastRegistrationDate: string;
	
	
}
