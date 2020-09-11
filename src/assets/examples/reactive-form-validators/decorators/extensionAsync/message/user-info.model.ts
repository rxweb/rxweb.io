import {  extensionAsync, } from   "@rxweb/reactive-form-validators"   
import { of } from 'rxjs'; 

export class UserInfo {

	@extensionAsync({validatorConfig:of({extensions:['vcf']  ,message:'You can upload only .vcf files.'}) })
	contactFile: string;
	
	
}
