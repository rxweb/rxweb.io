import { unique, prop, propArray, } from "@rxweb/reactive-form-validators"

export class Skill {

  @unique()
  skillName: string[];

  @unique({ message: 'You must enter a unique value' })
  hobbyName: string[];

  @unique({ messageKey: 'uniqueMessageKey' })
  certificationName: string[];
}

export class Employee {

  @propArray(Skill)
  skills: Skill[];

  @propArray(Skill)
  hobbies: Skill[];

  @propArray(Skill)
  certifications: Skill[];

}



