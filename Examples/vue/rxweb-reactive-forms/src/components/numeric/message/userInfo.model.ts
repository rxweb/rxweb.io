import {  numeric, NumericValueType, } from   "@rxweb/reactive-forms"   

export class UserInfo {

	@numeric({message:'{{0}} is not a positive number' }) 
	positiveNumber: number;
	
	
}
