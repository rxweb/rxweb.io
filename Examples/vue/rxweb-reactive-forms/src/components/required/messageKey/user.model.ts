import {  required, } from   "@rxweb/reactive-forms"   

export class User {

	@required({messageKey:'requiredMessageKey' }) 
	fullName: string;
	
	
}
