import {  noneOf, prop, noneOfAsync  } from "@rxweb/reactive-form-validators"
import { of } from 'rxjs'

export class EmployeeInfo{

    @noneOfAsync({validatorConfig:of({matchValues:["HR", "Network", "Sales"]})})
    department: string;

}