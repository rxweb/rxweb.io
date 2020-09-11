import {  lessThanAsync, } from   "@rxweb/reactive-form-validators"   
import { of } from 'rxjs'; 

export class User {

	@lessThanAsync({validatorConfig:of({fieldName:'obtainedMarks'  ,message:'Please enter number greater than 100.'}) })
	otherMarks: number;
	
	
}
