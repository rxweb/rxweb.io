import {  password, } from   "@rxweb/reactive-form-validators"   

export class LoginInfo {

	@password({validation:{maxLength: 10,minLength: 5,digit: true,specialCharacter: true}  ,message:{
                  minLength: 'Minimum Character length should be 5.',
                  maxLength: 'MaxLength allowed is 5'
                } }) 
	resetPassword: string;
	
	
}
