import {  compare, } from   "@rxweb/reactive-forms"   

export class User {

	@compare({fieldName:'contactNumber'  ,messageKey:'compareMessageKey' }) 
	confirmContactNumber: string;
	
	
}
