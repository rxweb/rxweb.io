import {  maxDate, } from   "@rxweb/reactive-forms"   

export class User {

	@maxDate({value:'07/30/2018' }) 
	allocationDate: string;
	
	
}
