import {  lessThanAsync,prop, } from   "@rxweb/reactive-form-validators"   
import { of } from 'rxjs'; 

export class User {

	@prop()
	obtainedMarks: number;

	@lessThanAsync({validatorConfig:of({fieldName:'obtainedMarks'}) })
	otherActivityMarks: number;
	
	
}
