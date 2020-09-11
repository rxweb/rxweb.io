import {  allOfAsync } from "@rxweb/reactive-form-validators"

export class EmployeeInfo{

    @allOfAsync({validatorConfig:of({matchValues:["Drawing", "Singing","Dancing","Travelling","Sports"],message: "Please select all hobbies"})
    hobbies: string;
}