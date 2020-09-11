import {  greaterThanAsync, } from   "@rxweb/reactive-form-validators"   
import { of } from 'rxjs'; 

export class User {

	@greaterThanAsync({validatorConfig:of({value:18}) })
	minimumAge: number;
	
	
}
