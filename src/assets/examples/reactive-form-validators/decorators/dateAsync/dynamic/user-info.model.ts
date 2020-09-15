import {  dateAsync,prop, } from   "@rxweb/reactive-form-validators"   
import { of } from 'rxjs';

export class UserInfo {

	@prop()
	birthDate: string;

	@prop()
	registrationDate: string;

	@prop()
	allocationDate: string;

	@prop()
	confirmationDate: string;

}
