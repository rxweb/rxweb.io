import {  minLengthAsync, } from   "@rxweb/reactive-form-validators"   
import { of } from 'rxjs'; 

export class Contact {

	@minLengthAsync({validatorConfig:of({value:8  ,message:'Minimum 8 characters are allowed'}) })
	landLineNo: string;
	
	
}
