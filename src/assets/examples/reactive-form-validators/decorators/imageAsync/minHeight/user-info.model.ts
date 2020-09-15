import {  imageAsync, } from   "@rxweb/reactive-form-validators"   
import { of } from 'rxjs';

export class UserInfo {

	@imageAsync({validatorConfig:of({minHeight:10  ,maxHeight:100  ,minWidth:10  ,maxWidth:10 })}) 
	voterId: string;
	
	
}
