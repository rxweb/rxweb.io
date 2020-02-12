import {  oneOf  } from "@rxweb/reactive-form-validators"

export class EmployeeInfo{

  @oneOf({ matchValues: ["English", "Spanish", "French", "German", "Chinese"], messageKey: "oneOfMessageKey"})
  languages: string;
}
