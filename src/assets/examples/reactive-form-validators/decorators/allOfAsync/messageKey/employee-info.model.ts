import {  allOfAsync } from "@rxweb/reactive-form-validators"
import { of } from 'rxjs'


export class EmployeeInfo{

  @allOfAsync({validatorConfig:of({ matchValues: ["English", "Spanish", "French"], messageKey: 'allOfMessageKey' })})
    languages: string;
}
