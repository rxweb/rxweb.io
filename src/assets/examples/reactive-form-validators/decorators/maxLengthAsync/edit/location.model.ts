import {  maxLengthAsync, } from   "@rxweb/reactive-form-validators"   
import { of } from 'rxjs'; 

export class Location {

	@maxLengthAsync({validatorConfig:of({value:10}) })
	firstName: string;
	
	
}
