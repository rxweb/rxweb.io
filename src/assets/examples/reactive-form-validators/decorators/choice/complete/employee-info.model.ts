import { prop, choice } from "@rxweb/reactive-form-validators"

export class EmployeeInfo {

  @prop()
  department: string;

  @choice({ minLength: 2 })
  projectDomains: string;

  @choice({ maxLength: 4 })
  qualifications: string[];

  @choice({ minLength: 2, conditionalExpression: (x, y) => x.department == "DotNet" })
  languages: string[];

  @choice({ minLength: 2, conditionalExpression: "x => x.department =='DotNet'" })
  skills: string;

  @choice({ maxLength: 4, message: "You can select upto 4 hobbies" })
  hobbies: string;
}
