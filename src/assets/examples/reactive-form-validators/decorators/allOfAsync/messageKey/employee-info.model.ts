import {  allOfAsync } from "@rxweb/reactive-form-validators"

export class EmployeeInfo{

  @allOfAsync({validatorConfig:of({ matchValues: ["English", "Spanish", "French"], messageKey: 'allOfMessageKey' })
    languages: string;
}
