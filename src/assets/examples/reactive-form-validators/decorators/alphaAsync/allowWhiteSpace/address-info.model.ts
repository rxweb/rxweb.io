import {  alphaAsync, } from   "@rxweb/reactive-form-validators"   
import { of } from 'rxjs'; 


export class AddressInfo {

	@alphaAsync({validatorConfig:of({allowWhiteSpace:true})})
	stateName: string;
	
	
}
