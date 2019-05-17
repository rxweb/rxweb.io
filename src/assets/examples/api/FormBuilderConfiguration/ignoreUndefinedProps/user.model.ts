import {  required,prop,propObject } from   "@rxweb/reactive-form-validators"   


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

    @propObject(Address)
    address: Address;
}