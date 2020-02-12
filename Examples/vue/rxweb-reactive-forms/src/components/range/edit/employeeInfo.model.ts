import {  range, } from   "@rxweb/reactive-forms"   

export class EmployeeInfo {

	@range({minimumNumber:18  ,maximumNumber:60 }) 
	age: number;
	
	
}
