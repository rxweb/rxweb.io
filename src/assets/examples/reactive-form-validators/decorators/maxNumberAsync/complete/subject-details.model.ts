import {  maxNumberAsync,prop, } from   "@rxweb/reactive-form-validators"   
import { of } from 'rxjs'; 

export class SubjectDetails {

	@prop()
	subjectCode: string;

	@maxNumberAsync({validatorConfig:of({value:50}) })
	passingMarks: number;
	
	
	@maxNumberAsync({validatorConfig:of({value:70  ,message:'{{0}} exceeds the Maximum marks Limit'}) })
	practicalMarks: number;
	
	
	@maxNumberAsync({validatorConfig:of({value:50  ,messageKey:'maxNumberMessageKey'}) })
	disciplineMarks: number;
	
	
}
