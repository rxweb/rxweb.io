import {  leapYear, } from   "@rxweb/reactive-forms"   

export class User {

	@leapYear() 
	birthYear: number;
	
	
}
