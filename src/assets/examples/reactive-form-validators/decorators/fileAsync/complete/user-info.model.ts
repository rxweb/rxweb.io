import {  fileAsync,prop, } from   "@rxweb/reactive-form-validators"   
import { of } from 'rxjs'; 

export class UserInfo {

	@prop()
	fileType: string;

	@fileAsync({validatorConfig:of({maxFiles:5}) })
	totalImageFiles: number;
	
	
	@fileAsync({validatorConfig:of({minFiles:5}) })
	totalDocumentFiles: number;
	
	
	@fileAsync({validatorConfig:of({minFiles:5  ,maxFiles:10  ,message:'You can upload minimum 5 and maximum 10 files.'}) })
	minMaxFiles: string;
	
	
	@fileAsync({validatorConfig:of({minFiles:2  ,maxFiles:5  ,messageKey:'fileMessageKey'}) })
	excelFiles: string;
	
	
}
