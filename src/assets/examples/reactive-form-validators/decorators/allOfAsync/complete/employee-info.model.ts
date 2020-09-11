import { allOf, prop } from "@rxweb/reactive-form-validators"

export class EmployeeInfo {

  @prop()
  department: string;

  @allOfAsync({validatorConfig:of({ matchValues: ["ECommerce", "Banking", "Educational", "Gaming"] })
  projectDomains: string;

  @allOfAsync({validatorConfig:of({ matchValues: ["Secondary", "Senior Secondary", "B.Tech.", "M.Tech.", "B.C.A.", "M.C.A."], conditionalExpression: (x, y) => x.department == 'DotNet' })
  qualifications: string[];

  @allOfAsync({validatorConfig:of({ matchValues: ["MVC", "AngularJS", "Angular 5", "C#", "Web Api", "SQL Server"], conditionalExpression: "x => x.department =='DotNet'" })
  skills: string;

  @allOfAsync({validatorConfig:of({ matchValues: ["Drawing", "Singing", "Dancing", "Travelling", "Sports"], message: "Please select all hobbies" })
  hobbies: string;

  @allOfAsync({validatorConfig:of({ matchValues: ["English", "Spanish", "French"], messageKey: 'allOfMessageKey' })
  languages: string;
}
