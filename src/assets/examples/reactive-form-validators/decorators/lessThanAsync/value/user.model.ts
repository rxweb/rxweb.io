import {  lessThanAsync, } from   "@rxweb/reactive-form-validators"   
import { of } from 'rxjs'; 

export class User {

	@lessThanAsync({validatorConfig:of({value:60}) })
	maximumAge: number;
	
	
}
