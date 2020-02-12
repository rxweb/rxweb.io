import {  notEmpty, } from   "@rxweb/reactive-forms"   

export class User {

	@notEmpty({messageKey:'notEmptyMessageKey' }) 
	fullName: string;
	
	
}
