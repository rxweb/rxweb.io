import { toFloat, sanitize } from '@rxweb/sanitizers'

@sanitize
export class User {


  @toFloat()
  amount: number;

}
