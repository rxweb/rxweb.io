import {  dateAsync, } from   "@rxweb/reactive-form-validators"   
import { of } from 'rxjs';

export class UserInfo {

	@dateAsync({validatorConfig:of({message:'{{0}} is not a valid date' })}) 
	allocationDate: string;
	
	
}
