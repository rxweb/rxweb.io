import {  oneOf  } from "@rxweb/reactive-form-validators"

export class EmployeeInfo{

    @oneOfAsync({validatorConfig:of({matchValues:["ECommerce", "Banking","Educational","Gaming"]})
    projectDomains: string;
}