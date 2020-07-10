import { toDouble, sanitize } from '@rxweb/sanitizers'

@sanitize
export class User {


  @toDouble()
  amount: number;

}
