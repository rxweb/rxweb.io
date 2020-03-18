import {  range,numeric } from   "@rxweb/reactive-form-validators"   

export class EmployeeInfo {

    @numeric({ allowDecimal: true })
	@range({minimumNumber:2  ,maximumNumber:10 }) 
	experience: number;
	
	
}
