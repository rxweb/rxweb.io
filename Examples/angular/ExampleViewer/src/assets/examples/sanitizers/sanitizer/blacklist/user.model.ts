import { blacklist, sanitize } from '@rxweb/sanitizers'

  @sanitize
  export class User {

  @blacklist('abc')
  freeText: string;

}
