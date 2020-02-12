import {  password,prop, } from   "@rxweb/reactive-forms"   

export class LoginInfo {

	@prop()
	newPassword: string;

	@prop()
	oldPassword: string;

	@prop()
	confirmPassword: string;

}
