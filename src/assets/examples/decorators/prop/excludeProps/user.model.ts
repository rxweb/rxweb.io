import {  prop, } from "@rxweb/reactive-form-validators"

export class User {
  
@prop()
type:string;

@prop({ignore:function(){ return this.type == "Personal";}})
emailAddress:string;


}
