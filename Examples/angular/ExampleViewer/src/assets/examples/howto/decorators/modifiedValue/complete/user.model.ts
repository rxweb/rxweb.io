import {  prop,propObject,propArray} from   "@rxweb/reactive-form-validators"   


export class Address {
    @prop()
    areaName: string;
}
export class Hobby {
    @prop()
    name: string;
}

export class User {
    @prop({ isPrimaryKey: true})
    userId: number;

	  @prop() 
	  firstName: string;
	
    @propObject(Address)
    address: Address;

    @propArray(Hobby)
    hobbies: Hobby[];
}