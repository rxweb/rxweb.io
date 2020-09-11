import {  oneOf  } from "@rxweb/reactive-form-validators"

export class EmployeeInfo{

  @oneOfAsync({validatorConfig:of({ matchValues: ["English", "Spanish", "French", "German", "Chinese"], messageKey: "oneOfMessageKey"})
  languages: string;
}
