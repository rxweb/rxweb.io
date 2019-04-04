import {  compare, } from   "@rxweb/reactive-form-validators"   

export class User {

	@compare({fieldName:'contactNumber'  ,messageKey:'compareMessageKey' }) 
	confirmContactNumber: string;
	
	
}
