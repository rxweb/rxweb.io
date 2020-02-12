import {  range, } from   "@rxweb/reactive-forms"   

export class EmployeeInfo {

	@range({minimumNumber:1000  ,maximumNumber:200000  ,message:'Your Salary should be between 1000 to 200000.' }) 
	salary: number;
	
	
}
