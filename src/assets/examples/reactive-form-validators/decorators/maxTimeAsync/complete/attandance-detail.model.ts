import {  maxTimeAsync,prop, } from   "@rxweb/reactive-form-validators"   
import { of } from 'rxjs'; 

export class AttandanceDetail {

	@prop()
	entryPlace: string;

	@maxTimeAsync({validatorConfig:of({value:'23:30'}) })
	closingTime: string;
	
	
	@maxTimeAsync({validatorConfig:of({operator:'<'  ,value:'00:10'}) })
	breakHours: string;
	
	
	@maxTimeAsync({validatorConfig:of({allowSeconds:true  ,value:'02:00:00'}) })
	totalOutTime: string;
	
	
	@maxTimeAsync({validatorConfig:of({message:'You can enter only time format data'  ,fieldName:'closingTime'}) })
	exitTime: string;
	
	
	@maxTimeAsync({validatorConfig:of({messageKey:'maxTimeMessageKey'  ,fieldName:'totalInTime'}) })
	netInTime: string;
	
	
}
