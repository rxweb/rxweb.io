import {  maxLength, } from   "@rxweb/reactive-forms"   

export class User {

	@maxLength({value:16 }) 
	firstName: string;
	
	
}
