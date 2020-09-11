import {  rangeAsync,prop, } from   "@rxweb/reactive-form-validators"   

export class EmployeeInfo {

	@prop()
	age: number;

	@prop()
	salary: number;

	@prop()
	noOfprojects: number;

}
