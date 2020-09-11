import {  fileAsync, } from   "@rxweb/reactive-form-validators"   
import { of } from 'rxjs'; 

export class UserInfo {

	@fileAsync({validatorConfig:of({maxFiles:5}) })
	totalImageFiles: number;
	
	
	@fileAsync({validatorConfig:of({minFiles:5}) })
	totalDocumentFiles: number;
	
	
}
