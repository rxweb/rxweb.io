import {  contains, } from   "@rxweb/reactive-forms"   

export class User {

	@contains({value:'@gmail.com'  ,messageKey:'containsMessageKey' }) 
	organizationEmailAddress: string;
	
	
}
