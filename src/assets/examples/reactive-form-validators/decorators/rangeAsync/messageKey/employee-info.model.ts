import {  rangeAsync, } from   "@rxweb/reactive-form-validators"   

export class EmployeeInfo {

	@rangeAsync({minimumNumber:1  ,maximumNumber:10  ,messageKey:'rangeMessageKey' }) 
	noOfprojects: number;
	
	
}
