import { prop, propArray } from "@rxweb/reactive-form-validators"

export class Address {
  @prop()
  city: string;

  @prop()
  country: string;
}

export class User {

  @prop()
  emailAddress: string;

  @propArray(Address,{createBlank:true})
  addresses: Address[];
}
