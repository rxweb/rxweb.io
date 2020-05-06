import { propArray,lessThan } from "@rxweb/reactive-form-validators"

export class Progression {
  @lessThan({isArrayControl:true})
  positiveArithemticExpression: number;

}

export class User {

  @propArray(Progression)
  progressions: Progression[];
}
