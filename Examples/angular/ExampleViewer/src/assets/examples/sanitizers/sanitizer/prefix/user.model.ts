import { prefix, sanitize } from '@rxweb/sanitizers'

@sanitize
export class User {


  @prefix('@')
  freeText: string ;

}
