import {  minTimeAsync, } from   "@rxweb/reactive-form-validators"   
import { of } from 'rxjs'; 

export class AttandanceDetail {

	@minTimeAsync({validatorConfig:of({operator:'>'  ,value:'08:30'}) })
	requiredHours: string;
	
	
}
