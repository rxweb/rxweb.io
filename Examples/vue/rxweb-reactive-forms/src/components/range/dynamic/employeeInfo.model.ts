import {  range,prop, } from   "@rxweb/reactive-forms"   

export class EmployeeInfo {

	@prop()
	age: number;

	@prop()
	experience: number;

	@prop()
	salary: number;

	@prop()
	noOfprojects: number;

}
