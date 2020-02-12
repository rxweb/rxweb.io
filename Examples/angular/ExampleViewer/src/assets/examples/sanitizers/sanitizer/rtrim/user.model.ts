import { rtrim, sanitize } from '@rxweb/sanitizers'

@sanitize
export class User {


  @rtrim()
  freeText: string ;

}
