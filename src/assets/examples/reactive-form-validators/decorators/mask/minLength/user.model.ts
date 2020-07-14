import {  mask, } from   "@rxweb/reactive-form-validators"   

export class User {

	//Digit Options
	@mask({mask:'999-9999999'  ,minLength:10 }) 
	residentalContactNumber: string;
	
	
}
