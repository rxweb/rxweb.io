import {  leapYear, } from   "@rxweb/reactive-forms"   

export class User {

	@leapYear({message:'{{0}} is not a leap year' }) 
	joiningYear: number;
	
	
}
