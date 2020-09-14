import {  oneOf, oneOfAsync  } from "@rxweb/reactive-form-validators"
import { of } from 'rxjs'

export class EmployeeInfo{

    @oneOfAsync({validatorConfig:of({matchValues:["Drawing", "Singing","Dancing","Travelling","Sports"],message: "Please select atleast 1 hobby"})})
    hobbies: string;
}