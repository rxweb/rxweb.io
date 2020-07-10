import {  required, } from   "@rxweb/reactive-form-validators"   

export class User {

	@required({messageKey:'requiredMessageKey',isAddMessageKey:true }) 
	fullName: string;
	
	
}
