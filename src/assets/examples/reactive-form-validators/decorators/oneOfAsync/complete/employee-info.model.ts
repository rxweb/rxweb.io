import { oneOfAsync, prop } from "@rxweb/reactive-form-validators"

export class EmployeeInfo {

  @prop()
  department: string;

  @oneOfAsync({validatorConfig:of({ matchValues: ["ECommerce", "Banking", "Educational", "Gaming"] })
  projectDomains: string;

  @oneOfAsync({validatorConfig:of({ matchValues: ["Secondary", "Senior Secondary", "B.Tech", "M.Tech", "B.C.A.", "M.C.A."], conditionalExpression: (x, y) => x.department == 'DotNet' })
  qualifications: string[];

  @oneOfAsync({validatorConfig:of({ matchValues: ["MVC", "AngularJS", "Angular 5", "C#", "Web Api", "SQL Server"], conditionalExpression: "x => x.department =='DotNet'" })
  skills: string;

  @oneOfAsync({validatorConfig:of({ matchValues: ["Drawing", "Singing", "Dancing", "Travelling", "Sports"], message: "Please select no hobbies" })
  hobbies: string;

  @oneOfAsync({validatorConfig:of({ matchValues: ["English", "Spanish", "French", "German", "Chinese"], messageKey: "oneOfMessageKey" })
  languages: string;
}
