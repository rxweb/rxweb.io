import {  passwordAsync, } from   "@rxweb/reactive-form-validators"   
import { of } from 'rxjs'; 

export class LoginInfo {

	@passwordAsync({validatorConfig:of({validation:{maxLength: 10,minLength: 5,digit: true,specialCharacter: true}}) })
	password: string;
	
	
}
