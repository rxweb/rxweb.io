import { required,error,propArray,propObject } from   "@rxweb/reactive-form-validators"   



	export class Skill {

    @required()
    skillName: string;
}

export class Address {

    @required()
    city: string;
}
export class User {

    @required()
    userName: string;

   
    @required()
    password: string;

    @propArray(Skill)
    skills: Skill[];

    @propObject(Address)
    address: Address;
}
