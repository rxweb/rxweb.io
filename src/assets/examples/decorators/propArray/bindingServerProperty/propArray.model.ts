import { prop, propArray } from "@rxweb/reactive-form-validators"

export class Address {
  @prop()
  city: string;

  @prop()
  country: string;
}

export class User {

  @prop({name:'email_address'})
  emailAddress: string;
  
  @propArray(Address,{name:"user_address"})
  addresses: Address[];
}
