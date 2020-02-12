import {  different, } from   "@rxweb/reactive-forms"   

export class AccountInfo {

	@different({fieldName:'firstName'  ,message:'{{0}} is same as firstName' }) 
	middleName: string;
	
	
}
