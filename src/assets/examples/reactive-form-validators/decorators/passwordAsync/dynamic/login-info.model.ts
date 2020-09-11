import {  passwordAsync,prop, } from   "@rxweb/reactive-form-validators"   
import { of } from 'rxjs'; 

export class LoginInfo {

	@prop()
	newPassword: string;

	@prop()
	resetPassword: string;

	@prop()
	oldPassword: string;

	@prop()
	confirmPassword: string;

}
