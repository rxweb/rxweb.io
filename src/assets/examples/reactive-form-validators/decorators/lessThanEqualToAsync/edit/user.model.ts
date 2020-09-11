import {  lessThanEqualToAsync,prop, } from   "@rxweb/reactive-form-validators"   
import { of } from 'rxjs'; 

export class User {

	@prop()
	totalMarks: number;

	@lessThanEqualToAsync({validatorConfig:of({fieldName:'totalMarks'}) })
	marks: number;
	
	
}
