import {  noneOf, prop  } from "@rxweb/reactive-form-validators"

export class EmployeeInfo{

    @noneOfAsync({validatorConfig:of({matchValues:["HR", "Network", "Sales"]})
    department: string;

}