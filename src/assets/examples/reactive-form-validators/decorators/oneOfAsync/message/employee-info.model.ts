import {  oneOf  } from "@rxweb/reactive-form-validators"

export class EmployeeInfo{

    @oneOfAsync({validatorConfig:of({matchValues:["Drawing", "Singing","Dancing","Travelling","Sports"],message: "Please select atleast 1 hobby"})
    hobbies: string;
}