import {  minNumberAsync, } from   "@rxweb/reactive-form-validators"   
import { of } from 'rxjs'; 

export class ResultInfo {

	@minNumberAsync({validatorConfig:of({value:35}) })
	maths: number;
	
	
	@minNumberAsync({validatorConfig:of({value:35  ,message:'Number should not be less than 35'}) })
	science: number;
	
	
	@minNumberAsync({validatorConfig:of({value:35  ,messageKey:'minNumberMessageKey'}) })
	economics: number;
	
	
}
