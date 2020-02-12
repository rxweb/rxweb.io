import {  lessThanEqualTo,prop, } from   "@rxweb/reactive-forms"   

export class User {

	@prop()
	totalMarks: number;

	@prop()
	passingMarks: number;

	@prop()
	maximumAge: number;

	@prop()
	practicalExamMarks: number;

	@prop()
	otherMarks: number;

	@prop()
	disciplineMarks: number;

}
