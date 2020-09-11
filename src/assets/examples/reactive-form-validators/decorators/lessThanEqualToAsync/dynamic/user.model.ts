import {  lessThanEqualToAsync,prop, } from   "@rxweb/reactive-form-validators"   
import { of } from 'rxjs'; 

export class User {

	@prop()
	totalMarks: number;

	@prop()
	passingMarks: number;

	@prop()
	maximumAge: number;

	@prop()
	otherMarks: number;

	@prop()
	disciplineMarks: number;

}
