import {  allOf  } from "@rxweb/reactive-form-validators"

export class EmployeeInfo{

    @allOf({matchValues:["ECommerce", "Banking"]})
    projectDomains: string;

}