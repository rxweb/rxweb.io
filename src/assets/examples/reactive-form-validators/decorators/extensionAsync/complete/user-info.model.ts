import {  extensionAsync,prop, } from   "@rxweb/reactive-form-validators"   
import { of } from 'rxjs'; 

export class UserInfo {

	@prop()
	fileType: string;

	@extensionAsync({validatorConfig:of({extensions:['jpg','bmp']}) })
	profilePicture: string;
	
	
	@extensionAsync({validatorConfig:of({extensions:['vcf']  ,message:'You can upload only .vcf files.'}) })
	contactFile: string;
	
	
	@extensionAsync({validatorConfig:of({extensions:['xls','xlsx']  ,messageKey:'extensionMessageKey'}) })
	excelFile: string;
	
	
}
