import { prop,propObject } from "@rxweb/reactive-form-validators"

export class Address {
    @prop()
    areaName: string;
}

export class User {

    @prop()
    firstName:string;

	 @propObject(Address)
    address: Address;
   
}
