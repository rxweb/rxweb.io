import {  fileSizeAsync, } from   "@rxweb/reactive-form-validators"   
import { of } from 'rxjs'; 

export class UserInfo {

	@fileSizeAsync({validatorConfig:of({maxSize:10  ,message:'File exceed maximum size.'}) })
	contactFile: string;
	
	
}
