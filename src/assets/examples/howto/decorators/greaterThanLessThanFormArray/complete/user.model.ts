import { prop, propArray,lessThan, greaterThan } from "@rxweb/reactive-form-validators"

export class Progression {
  @greaterThan({isArrayControl:true})
  positiveArithemticExpression: number;

}

export class User {

  @propArray(Progression)
  progressions: Progression[];
}
