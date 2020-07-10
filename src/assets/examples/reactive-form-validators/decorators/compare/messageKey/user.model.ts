import {  compare, prop } from   "@rxweb/reactive-form-validators"   

export class User {

	@prop()
	contactNumber: string;

	@compare({fieldName:'contactNumber'  ,messageKey:'compareMessageKey' }) 
	confirmContactNumber: string;
	
}