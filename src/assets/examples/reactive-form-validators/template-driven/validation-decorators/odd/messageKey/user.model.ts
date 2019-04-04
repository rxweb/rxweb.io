import {  odd, } from   "@rxweb/reactive-form-validators"   

export class User {

	@odd({messageKey:'oddMessageKey' }) 
	otherOddNumber: string;
	
	
}
