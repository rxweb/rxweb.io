import {  oneOf, oneOfAsync  } from "@rxweb/reactive-form-validators"
import { of } from 'rxjs'

export class EmployeeInfo{

    @oneOfAsync({validatorConfig:of({matchValues:["ECommerce", "Banking","Educational","Gaming"]})})
    projectDomains: string;
}