import { lowerCase, sanitize } from '@rxweb/sanitizers'

  @sanitize
  export class User {

  @lowerCase()
  freeText: string;

}
