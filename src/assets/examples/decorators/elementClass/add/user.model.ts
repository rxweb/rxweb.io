import {  prop,elementClass } from "@rxweb/reactive-form-validators"
import { AbstractControl } from "@angular/forms"

export class User {

   @prop()
   @elementClass({
       conditionalExpression: function (c) {
           return this.password == "complex" && c.dirty == true ? 'ng-invalid' : '';
       }})
   userName: string;

   @prop()
   password: string;
}