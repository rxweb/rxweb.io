import { ltrim, sanitize } from '@rxweb/sanitizers'

@sanitize
export class User {


  @ltrim()
  freeText: string;

}
