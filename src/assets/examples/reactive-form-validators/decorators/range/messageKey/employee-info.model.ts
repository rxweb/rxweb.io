import {  range, } from   "@rxweb/reactive-form-validators"   

export class EmployeeInfo {

	@range({minimumNumber:1  ,maximumNumber:10  ,messageKey:'rangeMessageKey' }) 
	noOfprojects: number;
	
	
}
