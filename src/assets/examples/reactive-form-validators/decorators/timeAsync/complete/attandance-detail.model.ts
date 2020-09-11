import {  timeAsync,prop, } from   "@rxweb/reactive-form-validators"   
import { of } from 'rxjs'; 

export class AttandanceDetail {

	@prop()
	entryPlace: string;

	@timeAsync({validatorConfig:of({allowSeconds:true}) })
	totalOutTime: string;
	
	
	@timeAsync({validatorConfig:of({message:'You can enter only time format data'}) })
	exitTime: string;
	
	
	@timeAsync({validatorConfig:of({messageKey:'timeMessageKey'}) })
	netInTime: string;
	
	
}
