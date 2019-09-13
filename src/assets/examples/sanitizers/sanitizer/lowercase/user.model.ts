import { upperCase, sanitize } from '@rxweb/sanitizers'

  @sanitize
  export class User {

  @upperCase()
  freeText: string;

}
