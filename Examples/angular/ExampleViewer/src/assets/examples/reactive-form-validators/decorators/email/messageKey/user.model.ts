import {  email, } from   "@rxweb/reactive-form-validators"   

export class User {

	@email({messageKey:'emailMessageKey' }) 
	organizationEmailAddress: string;
	
	
}
