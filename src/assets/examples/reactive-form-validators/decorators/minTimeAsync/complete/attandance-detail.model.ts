import {  minTimeAsync,prop, } from   "@rxweb/reactive-form-validators"   
import { of } from 'rxjs'; 

export class AttandanceDetail {

	@prop()
	entryPlace: string;

	@minTimeAsync({validatorConfig:of({value:'08:00'}) })
	openingTime: string;
	
	
	@minTimeAsync({validatorConfig:of({operator:'>'  ,value:'08:30'}) })
	requiredHours: string;
	
	
	@minTimeAsync({validatorConfig:of({allowSeconds:true  ,value:'00:10:00'}) })
	totalOutTime: string;
	
	
	@minTimeAsync({validatorConfig:of({message:'You can enter only time format data greater than config value'  ,value:'07:00'}) })
	exitTime: string;
	
	
	@prop()
	netInTime: string;

}
