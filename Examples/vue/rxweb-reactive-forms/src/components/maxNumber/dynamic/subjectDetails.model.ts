import {  maxNumber,prop, } from   "@rxweb/reactive-forms"   

export class SubjectDetails {

	@prop()
	subjectCode: string;

	@prop()
	obtainedMarks: number;

	@prop()
	passingMarks: number;

	@prop()
	practicalMarks: number;

	@prop()
	disciplineMarks: number;

}
