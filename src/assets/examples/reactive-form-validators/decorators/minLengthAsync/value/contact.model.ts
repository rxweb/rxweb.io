import {  minLengthAsync, } from   "@rxweb/reactive-form-validators"   
import { of } from 'rxjs'; 

export class Contact {

	@minLengthAsync({validatorConfig:of({value:10}) })
	mobileNo: string;
	
	
}
