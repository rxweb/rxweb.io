import { allOf, prop } from "@rxweb/reactive-form-validators"

export class EmployeeInfo {

  @prop()
  department: string;

  @prop()
  projectDomains: string;

  @prop()
  skills: string;

  @prop()
  hobbies: string;

  @prop()
  languages: string;
}
