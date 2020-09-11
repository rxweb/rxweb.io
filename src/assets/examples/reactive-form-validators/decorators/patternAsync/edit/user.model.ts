import {  patternAsync, } from   "@rxweb/reactive-form-validators"   
import { of } from 'rxjs'; 

export class User {

	@patternAsync({validatorConfig:of({expression:{'onlyAlpha': /^[A-Za-z]+$/}}) })
	userName: string;
	
	
}
