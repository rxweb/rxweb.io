import {  lessThanEqualTo,prop, } from   "@rxweb/reactive-form-validators"   

export class User {

	@prop()
	totalMarks: number;

	@lessThanEqualTo({fieldName:'totalMarks' }) 
	passingMarks: number;
	
	
	//If you want to apply conditional expression of type 'function'
	@lessThanEqualTo({fieldName:'totalMarks'  ,conditionalExpression:(x,y) => x.totalMarks == 100  }) 
	obtainedMarks: number;
	
	
	//If you want to apply conditional expression of type 'string'
	@lessThanEqualTo({fieldName:'totalMarks'  ,conditionalExpression:'x => x.totalMarks == 100' }) 
	practicalExamMarks: number;
	
	
	@lessThanEqualTo({fieldName:'totalMarks'  ,message:'Please enter number which is less than or equal to above field input.' }) 
	otherMarks: number;
	
	
	@lessThanEqualTo({fieldName:'totalMarks'  ,messageKey:'lessThanEqualToMessageKey' }) 
	disciplineMarks: number;
	
	
}
