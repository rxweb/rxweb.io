import {  odd, } from   "@rxweb/reactive-forms"   

export class User {

	@odd({messageKey:'oddMessageKey' }) 
	otherOddNumber: string;
	
	
}
