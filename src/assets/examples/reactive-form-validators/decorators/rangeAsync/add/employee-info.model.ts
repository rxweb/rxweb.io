import {  rangeAsync, } from   "@rxweb/reactive-form-validators"   

export class EmployeeInfo {

	@rangeAsync({minimumNumber:18  ,maximumNumber:60 }) 
	age: number;
	
	
}
