import {  lessThan,prop, } from   "@rxweb/reactive-forms"   

export class User {

	@prop()
	obtainedMarks: number;

	@prop()
	otherActivityMarks: number;

	@prop()
	maximumAge: number;

	@prop()
	passingMarks: number;

	@prop()
	otherMarks: number;

	@prop()
	disciplineMarks: number;

}
