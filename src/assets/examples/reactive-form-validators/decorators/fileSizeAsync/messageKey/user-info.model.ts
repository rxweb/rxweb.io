import {  fileSizeAsync, } from   "@rxweb/reactive-form-validators"   
import { of } from 'rxjs'; 

export class UserInfo {

	@fileSizeAsync({validatorConfig:of({maxSize:100  ,messageKey:'fileSizeMessageKey'}) })
	excelFile: string;
	
	
}
