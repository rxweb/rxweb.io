import {  dateAsync, } from   "@rxweb/reactive-form-validators"   
import { of } from 'rxjs';

export class UserInfo {

	@dateAsync({validatorConfig:of({messageKey:'dateMessageKey' })}) 
	confirmationDate: string;
	
	
}
