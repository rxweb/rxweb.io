import {  fileAsync, } from   "@rxweb/reactive-form-validators"   
import { of } from 'rxjs'; 

export class UserInfo {

	@fileAsync({validatorConfig:of({minFiles:2  ,maxFiles:5  ,messageKey:'fileMessageKey'}) })
	excelFiles: string;
	
	
}
