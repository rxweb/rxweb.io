import {  maxTimeAsync, } from   "@rxweb/reactive-form-validators"   
import { of } from 'rxjs'; 

export class AttandanceDetail {

	@maxTimeAsync({validatorConfig:of({messageKey:'maxTimeMessageKey'  ,fieldName:'totalInTime'}) })
	netInTime: string;
	
	
}
