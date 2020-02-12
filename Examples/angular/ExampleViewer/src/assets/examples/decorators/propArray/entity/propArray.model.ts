import {  required,disable,prop } from "@rxweb/reactive-form-validators"
import { AbstractControl } from "@angular/forms"

import { propArray } from "@rxweb/reactive-form-validators"

export class Address {
  @prop()
  city: string;

  @prop()
  country: string;
}
export class Telephone {
    @prop()
    mobileNumber: number;
}
export class User {

  @prop()
  contactType: string;

   @propArray(undefined, { entityProvider: function () { return this.contactType == "Address" ? Address : Telephone } })
    contacts: Telephone[] | Address[]
}