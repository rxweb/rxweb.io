import {  rangeAsync, } from   "@rxweb/reactive-form-validators"   

export class EmployeeInfo {

	@rangeAsync({minimumNumber:18  ,maximumNumber:60 }) 
	age: number;
	
	
	@rangeAsync({minimumNumber:1000  ,maximumNumber:200000  ,message:'Your Salary should be between 1000 to 200000.' }) 
	salary: number;
	
	
	@rangeAsync({minimumNumber:1  ,maximumNumber:10  ,messageKey:'rangeMessageKey' }) 
	noOfprojects: number;
	
	
}
