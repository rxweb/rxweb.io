import { prop, propObject } from "@rxweb/reactive-form-validators"

export class Address {
    @prop()
    city: string;
  
    @prop()
    country: string;
  }
  
  export class User {
  
    @prop({name:'email_address'})
    emailAddress: string;
    
    @propObject(Address,{name:'user_address'})
    address: Address;
  }
