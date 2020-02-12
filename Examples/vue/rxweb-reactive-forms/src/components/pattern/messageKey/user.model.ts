import {  pattern, } from   "@rxweb/reactive-forms"   

export class User {

	@pattern({expression:{'pinCode':/^[1-9][0-9]{5}$/ }  ,messageKey:'patternMessageKey' }) 
	pinCode: string;
	
	
}
