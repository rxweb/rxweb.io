import {  imageAsync, } from   "@rxweb/reactive-form-validators"   
import { of } from 'rxjs';

export class UserInfo {

	@imageAsync({validatorConfig:of({maxHeight:100  ,maxWidth:100 })}) 
	profilePhoto: string;
	
	
}
