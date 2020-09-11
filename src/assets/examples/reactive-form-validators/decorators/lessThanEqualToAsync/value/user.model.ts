import {  lessThanEqualToAsync, } from   "@rxweb/reactive-form-validators"   
import { of } from 'rxjs'; 

export class User {

	@lessThanEqualToAsync({validatorConfig:of({value:60}) })
	maximumAge: number;
	
	
}
