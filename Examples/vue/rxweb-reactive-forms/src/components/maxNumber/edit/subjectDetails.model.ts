import {  maxNumber, } from   "@rxweb/reactive-forms"   

export class SubjectDetails {

	@maxNumber({value:50 }) 
	passingMarks: number;
	
	
}
