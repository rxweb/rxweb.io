import {  leapYear, } from   "@rxweb/reactive-forms"   

export class User {

	@leapYear({messageKey:'leapYearMessageKey' }) 
	promotionYear: number;
	
	
}
