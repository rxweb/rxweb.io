import {  timeAsync, } from   "@rxweb/reactive-form-validators"   
import { of } from 'rxjs'; 

export class AttandanceDetail {

	@timeAsync({validatorConfig:of({messageKey:'timeMessageKey'}) })
	netInTime: string;
	
	
}
