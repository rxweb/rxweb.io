import {  contains, } from   "@rxweb/reactive-forms"   

export class User {

	@contains({value:'@gmail.com'  ,message:'Please enter valid gmailId' }) 
	otherEmailAddress: string;
	
	
}
