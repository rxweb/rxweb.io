import {  factor, } from   "@rxweb/reactive-form-validators"   

export class User {

	@factor({dividend:50  ,messageKey:'factorMessageKey' }) 
	seventhNumber: number;
	
	
}
