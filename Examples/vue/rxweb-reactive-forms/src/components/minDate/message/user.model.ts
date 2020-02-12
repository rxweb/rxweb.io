import {  minDate, } from   "@rxweb/reactive-forms"   

export class User {

	@minDate({value:'07/30/2018'  ,message:'{{0}} exceeds the Minimum Date Limit' }) 
	registrationDate: string;
	
	
}
