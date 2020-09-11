import {  maxNumberAsync, } from   "@rxweb/reactive-form-validators"   
import { of } from 'rxjs'; 

export class SubjectDetails {

	@maxNumberAsync({validatorConfig:of({value:70  ,message:'{{0}} exceeds the Maximum marks Limit'}) })
	practicalMarks: number;
	
	
}
