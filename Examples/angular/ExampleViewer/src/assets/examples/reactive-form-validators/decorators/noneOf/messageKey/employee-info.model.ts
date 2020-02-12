import {  noneOf  } from "@rxweb/reactive-form-validators"

export class EmployeeInfo{

  @noneOf({ matchValues: ["English", "Spanish", "French"], messageKey: "noneOfMessageKey"})
    languages: string;
}
