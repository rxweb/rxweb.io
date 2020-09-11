import {  minLengthAsync,prop, } from   "@rxweb/reactive-form-validators"   
import { of } from 'rxjs'; 

export class Contact {

	@prop()
	countryName: string;

	@minLengthAsync({validatorConfig:of({value:10}) })
	mobileNo: string;
	
	
	@minLengthAsync({validatorConfig:of({value:8  ,message:'Minimum 8 characters are allowed'}) })
	landLineNo: string;
	
	
	@minLengthAsync({validatorConfig:of({value:3  ,messageKey:'minLengthMessageKey'}) })
	stateName: string;
	
	
}
