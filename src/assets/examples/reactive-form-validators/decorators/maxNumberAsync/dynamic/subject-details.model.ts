import {  maxNumberAsync,prop, } from   "@rxweb/reactive-form-validators"   
import { of } from 'rxjs'; 

export class SubjectDetails {

	@prop()
	subjectCode: string;

	@prop()
	passingMarks: number;

	@prop()
	practicalMarks: number;

	@prop()
	disciplineMarks: number;

}
