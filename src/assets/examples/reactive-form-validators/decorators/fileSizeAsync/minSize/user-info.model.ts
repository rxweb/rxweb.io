import {  fileSizeAsync, } from   "@rxweb/reactive-form-validators"   
import { of } from 'rxjs'; 

export class UserInfo {

	@fileSizeAsync({validatorConfig:of({minSize:3  ,maxSize:100}) })
	audioFile: string;
	
	
}
