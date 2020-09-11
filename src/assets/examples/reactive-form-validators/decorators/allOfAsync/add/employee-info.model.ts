import {  allOfAsync } from "@rxweb/reactive-form-validators"

export class EmployeeInfo{

    @allOfAsync({validatorConfig:of({matchValues:["ECommerce", "Banking"]})
    projectDomains: string;

}