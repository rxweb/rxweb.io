import {  email, } from   "@rxweb/reactive-forms"   

export class User {

	@email({messageKey:'emailMessageKey' }) 
	organizationEmailAddress: string;
	
	
}
