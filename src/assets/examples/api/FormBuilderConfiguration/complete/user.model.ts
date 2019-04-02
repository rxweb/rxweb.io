import {  required,prop,propArray,propObject } from   "@rxweb/reactive-form-validators"   


export class Skill {
    @prop()
    name: string;
}
export class Address {

    @prop()
    city: string;
   
   @prop()
   state: string;

}
export class User {

	  @prop() 
	  firstName: string;
	
  	@prop()
    lastName:string;

    @propArray(Skill)
    skills: Skill[];

    @propObject(Address)
    address: Address;
}