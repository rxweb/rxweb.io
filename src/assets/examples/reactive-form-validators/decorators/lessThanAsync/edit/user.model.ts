import {  lessThanAsync,prop, } from   "@rxweb/reactive-form-validators"   
import { of } from 'rxjs'; 

export class User {

	@prop()
	marks: number;

	@lessThanAsync({validatorConfig:of({fieldName:'marks'}) })
	passingMarks: number;
	
	
}
