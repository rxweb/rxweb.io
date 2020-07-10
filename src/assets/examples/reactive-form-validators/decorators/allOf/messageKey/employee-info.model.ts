import {  allOf  } from "@rxweb/reactive-form-validators"

export class EmployeeInfo{

  @allOf({ matchValues: ["English", "Spanish", "French"], messageKey: 'allOfMessageKey' })
    languages: string;
}
