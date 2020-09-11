import {  containsAsync, } from   "@rxweb/reactive-form-validators"   
import { of } from 'rxjs'; 

export class User {

	@containsAsync({validatorConfig:of({value:'@gmail.com'}) })
	emailAddress: string;
	
	
}
