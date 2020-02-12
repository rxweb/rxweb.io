import {  maxNumber, } from   "@rxweb/reactive-forms"   

export class SubjectDetails {

	@maxNumber({value:70  ,message:'{{0}} exceeds the Maximum marks Limit' }) 
	practicalMarks: number;
	
	
}
