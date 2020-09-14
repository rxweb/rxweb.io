import {  noneOfAsync } from "@rxweb/reactive-form-validators"
import { of } from 'rxjs';

export class EmployeeInfo{

  @noneOfAsync({validatorConfig:of({ matchValues: ["English", "Spanish", "French"], messageKey: "noneOfMessageKey"})})
    languages: string;
}
