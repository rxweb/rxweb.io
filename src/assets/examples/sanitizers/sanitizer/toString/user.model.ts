import { toString, sanitize } from '@rxweb/sanitizers'

@sanitize
export class User {


  @toString()
  freeText: string = "abc";

}
