import {  minDate, } from   "@rxweb/reactive-forms"   

export class User {

	@minDate({value:'07/30/2018'  ,operator:'>' }) 
	confirmationDate: string;
	
	
}
