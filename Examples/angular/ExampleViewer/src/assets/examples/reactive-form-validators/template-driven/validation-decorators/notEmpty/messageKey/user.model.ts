import {  notEmpty, } from   "@rxweb/reactive-form-validators"   

export class User {

	@notEmpty({messageKey:'notEmptyMessageKey' }) 
	fullName: string;
	
	
}
