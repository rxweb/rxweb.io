import {  noneOfAsync } from "@rxweb/reactive-form-validators"
import { of } from 'rxjs'

export class EmployeeInfo{

    @noneOfAsync({validatorConfig:of({matchValues:["Drawing", "Singing","Dancing","Travelling","Sports"],message: "Please do not select any hobby"})})
    hobbies: string;
}