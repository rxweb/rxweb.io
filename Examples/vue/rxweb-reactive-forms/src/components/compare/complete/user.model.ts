import {  compare,prop, } from   "@rxweb/reactive-forms"   

export class User {

	@prop()
	email: string;

	@compare({fieldName:'email' }) 
	confirmEmail: string;
	
	
	@prop()
	password: string;

	//Shows custom message
	@compare({fieldName:'password'  ,message:'You must enter same password' }) 
	confirmPassword: string;
	
	
	@prop()
	contactNumber: string;

	@compare({fieldName:'contactNumber'  ,messageKey:'compareMessageKey' }) 
	confirmContactNumber: string;
	
	
}
