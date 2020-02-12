import {  greaterThanEqualTo,prop, } from   "@rxweb/reactive-forms"   

export class User {

	@prop()
	admissionAge: number;

	@greaterThanEqualTo({fieldName:'admissionAge' }) 
	retiermentAge: number;
	
	
	@greaterThanEqualTo({value:18 }) 
	minimumAge: number;
	
	
	//If you want to apply conditional expression of type 'function'
	@greaterThanEqualTo({fieldName:'admissionAge'  ,conditionalExpression:(x,y) => x.admissionAge >= 18  }) 
	voterAge: number;
	
	
	//If you want to apply conditional expression of type 'string'
	@greaterThanEqualTo({fieldName:'admissionAge'  ,conditionalExpression:'x => x.admissionAge >= 18 ' }) 
	memberAge: number;
	
	
	@greaterThanEqualTo({fieldName:'admissionAge'  ,message:'Please enter number greater than or equal to 1.' }) 
	otherAge: number;
	
	
	@greaterThanEqualTo({fieldName:'admissionAge'  ,messageKey:'greaterThanEqualToMessageKey' }) 
	joiningAge: number;
	
	
}
