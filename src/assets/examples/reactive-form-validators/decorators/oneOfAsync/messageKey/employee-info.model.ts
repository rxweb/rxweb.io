import {  oneOf, oneOfAsync  } from "@rxweb/reactive-form-validators"
import { of } from 'rxjs';

export class EmployeeInfo{

  @oneOfAsync({validatorConfig:of({ matchValues: ["English", "Spanish", "French", "German", "Chinese"], messageKey: "oneOfMessageKey"})})
  languages: string;
}
