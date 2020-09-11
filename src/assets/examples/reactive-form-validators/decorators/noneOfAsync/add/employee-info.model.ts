import {  noneOfAsync } from "@rxweb/reactive-form-validators"

export class EmployeeInfo{

    @noneOfAsync({validatorConfig:of({matchValues:["ECommerce", "Banking","Educational","Gaming"]})
    projectDomains: string;

}