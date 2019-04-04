import {  prop,propArray } from   "@rxweb/reactive-form-validators"   


export class Skill {
    @prop()
    name: string;
}

export class User {

	  @prop() 
	  firstName: string;
	
  	  @prop()
      lastName:string;

      @propArray(Skill)
      skills: Skill[];

}