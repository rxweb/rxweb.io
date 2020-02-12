import {  contains, } from   "@rxweb/reactive-form-validators"   

export class User {

	@contains({value:'@gmail.com'  ,messageKey:'containsMessageKey' }) 
	organizationEmailAddress: string;
	
	
}
