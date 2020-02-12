import {  maxLength, } from   "@rxweb/reactive-forms"   

export class User {

	//Shows custom message
	@maxLength({value:10  ,message:'Maximum 10 characters are allowed' }) 
	userName: string;
	
	
}
