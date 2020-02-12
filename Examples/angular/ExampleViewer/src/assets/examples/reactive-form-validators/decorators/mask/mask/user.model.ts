import {  mask, } from   "@rxweb/reactive-form-validators"   

export class User {

	@mask({mask:'(999)-999 9999' }) 
	phoneNumber: string;
	
	
}
