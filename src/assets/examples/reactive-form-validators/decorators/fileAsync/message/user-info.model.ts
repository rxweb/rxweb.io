import {  fileAsync, } from   "@rxweb/reactive-form-validators"   
import { of } from 'rxjs'; 

export class UserInfo {

	@fileAsync({validatorConfig:of({minFiles:5  ,maxFiles:10  ,message:'You can upload minimum 5 and maximum 10 files.'}) })
	minMaxFiles: string;
	
	
}
