import {  maxTimeAsync, } from   "@rxweb/reactive-form-validators"   
import { of } from 'rxjs'; 

export class AttandanceDetail {

	@maxTimeAsync({validatorConfig:of({operator:'<'  ,value:'00:10'}) })
	breakHours: string;
	
	
}
