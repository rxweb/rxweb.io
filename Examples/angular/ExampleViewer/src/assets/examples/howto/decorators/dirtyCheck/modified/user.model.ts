import {  prop } from "@rxweb/reactive-form-validators"
export class User {

  @prop()
  id: number;

  @prop()
  name: string;

 @prop()
 designation: string;
}
