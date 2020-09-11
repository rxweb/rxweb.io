import {  maxLengthAsync, } from   "@rxweb/reactive-form-validators"   
import { of } from 'rxjs'; 

export class User {

	@maxLengthAsync({validatorConfig:of({value:16}) })
	firstName: string;
	
	
}
