import {  fileSizeAsync,prop, } from   "@rxweb/reactive-form-validators"   
import { of } from 'rxjs'; 

export class UserInfo {

	@prop()
	fileType: string;

	@fileSizeAsync({validatorConfig:of({maxSize:100}) })
	videoFile: string;
	
	
	@fileSizeAsync({validatorConfig:of({minSize:3  ,maxSize:100}) })
	audioFile: string;
	
	
	@fileSizeAsync({validatorConfig:of({maxSize:10  ,message:'File exceed maximum size.'}) })
	contactFile: string;
	
	
	@fileSizeAsync({validatorConfig:of({maxSize:50}) })
	profilePicture: string;
	
	
	@fileSizeAsync({validatorConfig:of({maxSize:100  ,messageKey:'fileSizeMessageKey'}) })
	excelFile: string;
	
	
}
