import {  alphaAsync, } from   "@rxweb/reactive-form-validators"   
import { of } from 'rxjs'; 

export class AddressInfo {

	@alphaAsync({validatorConfig:of({messageKey:'alphaMessageKey'}) })
	cityCode: string;
	
	
}
