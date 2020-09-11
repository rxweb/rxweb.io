import {  lessThanAsync,prop, } from   "@rxweb/reactive-form-validators"   
import { of } from 'rxjs'; 

export class User {

	@prop()
	obtainedMarks: number;

	@prop()
	otherActivityMarks: number;

	@prop()
	maximumAge: number;

	@prop()
	otherMarks: number;

	@prop()
	disciplineMarks: number;

}
