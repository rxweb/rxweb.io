import {  patternAsync, } from   "@rxweb/reactive-form-validators"   
import { of } from 'rxjs'; 

export class User {

	@patternAsync({validatorConfig:of({expression:{'pinCode':/^[1-9][0-9]{5}$/ }  ,messageKey:'patternMessageKey'}) })
	pinCode: string;
	
	
}
