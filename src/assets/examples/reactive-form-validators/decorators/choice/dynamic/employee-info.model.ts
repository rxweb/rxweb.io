import {  oneOf,prop  } from "@rxweb/reactive-form-validators"

export class EmployeeInfo{

    @prop()
    department: string;
    
    @prop()
    projectDomains: string[];

    @prop()
	languages: string[];

    @prop()
    skills: string[];

    @prop()
    hobbies: string[];

    @prop()
    certifications: string[];
}
