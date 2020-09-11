import {  alphaNumericAsync, } from   "@rxweb/reactive-form-validators"   
import { of } from 'rxjs'; 

export class Location {

	@alphaNumericAsync({validatorConfig:of({messageKey:'alphaNumericMessageKey'}) })
	colonyName: string;
	
	
}
