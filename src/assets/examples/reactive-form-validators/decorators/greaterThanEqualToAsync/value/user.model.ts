import {  greaterThanEqualToAsync, } from   "@rxweb/reactive-form-validators"   
import { of } from 'rxjs'; 

export class User {

	@greaterThanEqualToAsync({validatorConfig:of({value:18}) })
	minimumAge: number;
	
	
}
