import {  maxNumberAsync, } from   "@rxweb/reactive-form-validators"   
import { of } from 'rxjs'; 

export class SubjectDetails {

	@maxNumberAsync({validatorConfig:of({value:50}) })
	passingMarks: number;
	
	
}
