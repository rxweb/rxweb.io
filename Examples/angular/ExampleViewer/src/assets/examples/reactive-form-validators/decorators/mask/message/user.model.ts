import {  mask, } from   "@rxweb/reactive-form-validators"   

export class User {

	//Shows custom message
	@mask({mask:'999-9999999'  ,message:'Enter a valid Contact Number' }) 
	contactNumber: string;
	
	
}
