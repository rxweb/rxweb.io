import { whitelist, sanitize } from '@rxweb/sanitizers'

@sanitize
export class User {


  @whitelist("abc")
  freeText: string;

}
