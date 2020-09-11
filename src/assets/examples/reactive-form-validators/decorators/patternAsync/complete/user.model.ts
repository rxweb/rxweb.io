import {  patternAsync, } from   "@rxweb/reactive-form-validators"   
import { of } from 'rxjs'; 

export class User {

	@patternAsync({validatorConfig:of({expression:{'onlyAlpha': /^[A-Za-z]+$/}}) })
	userName: string;
	
	
	@patternAsync({validatorConfig:of({expression:{'zipCode':/^[0-9]{5}(?:-[0-9]{4})?$/ }  ,message:'Zip code should match 12345 or 12345-6789'}) })
	zipCode: string;
	
	
	@patternAsync({validatorConfig:of({expression:{'pinCode':/^[1-9][0-9]{5}$/ }  ,messageKey:'patternMessageKey'}) })
	pinCode: string;
	
	
}
