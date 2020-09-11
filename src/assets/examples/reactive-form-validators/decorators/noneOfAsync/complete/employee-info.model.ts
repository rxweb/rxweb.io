import { noneOf, prop } from "@rxweb/reactive-form-validators"

export class EmployeeInfo {

  @prop()
  department: string;

  @noneOfAsync({validatorConfig:of({ matchValues: ["ECommerce", "Banking", "Educational", "Gaming"] })
  projectDomains: string;

  @noneOfAsync({validatorConfig:of({ matchValues: ["Secondary", "Senior Secondary", "B.Tech", "M.Tech", "B.C.A.", "M.C.A."], conditionalExpression: (x, y) => x.department == 'DotNet' })
  qualifications: string[];

  @noneOfAsync({validatorConfig:of({ matchValues: ["MVC", "AngularJS", "Angular 5", "C#", "Web Api", "SQL Server"], conditionalExpression: "x => x.department =='DotNet'" })
  skills: string;

  @noneOfAsync({validatorConfig:of({ matchValues: ["Drawing", "Singing", "Dancing", "Travelling", "Sports"], message: "Please do not select any hobbies" })
  hobbies: string;

  @noneOfAsync({validatorConfig:of({ matchValues: ["English", "Spanish", "French"], messageKey: "noneOfMessageKey" })
  languages: string;
}
