import { propObject, required } from "@rxweb/reactive-form-validators"


export class Address {
    @required()
    areaName: string;
}

export class User {

    @required()
    firstName: string;

    @propObject(Address)
    address: Address;
}