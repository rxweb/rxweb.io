import {  minNumberAsync, } from   "@rxweb/reactive-form-validators"   
import { of } from 'rxjs'; 

export class ResultInfo {

	@minNumberAsync({validatorConfig:of({value:35  ,messageKey:'minNumberMessageKey'}) })
	economics: number;
	
	
}
