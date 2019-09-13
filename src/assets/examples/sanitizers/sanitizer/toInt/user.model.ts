import { toInt, sanitize } from '@rxweb/sanitizers'

@sanitize
export class User {


  @toInt()
  amount: number;

}
