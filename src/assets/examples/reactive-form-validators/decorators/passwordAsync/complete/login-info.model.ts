import {  passwordAsync, } from   "@rxweb/reactive-form-validators"   
import { of } from 'rxjs'; 

export class LoginInfo {

	// @passwordAsync({validatorConfig:of({validation:{maxLength: 10,minLength: 5,digit: true,specialCharacter: true}}) })
	// newPassword: string;
	
	
	// @passwordAsync({validatorConfig:of({validation:{maxLength: 10,minLength: 5,digit: true,specialCharacter: true}  ,message:{
    //               minLength: 'Minimum Character length should be 5.',
    //               maxLength: 'MaxLength allowed is 5'
    //             }}) })
	// resetPassword: string;
	
	
	// @passwordAsync({validatorConfig:of({validation:{maxLength: 10,minLength: 5,digit: true,specialCharacter: true}  ,message:'Password is not valid'}) })
	// oldPassword: string;
	
	
	// @passwordAsync({validatorConfig:of({validation:{maxLength: 10,minLength: 5,digit: true,specialCharacter: true}  ,messageKey:'passwordMessageKey'}) })
	// confirmPassword: string;
	
	
}
