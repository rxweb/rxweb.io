import { prop, toBoolean,sanitize } from "@rxweb/reactive-form-validators"

export class User{

  @prop()
  fullName:string;

  @prop()
  age: number;

  @prop()
  @toBoolean()
  accepted: boolean;
}