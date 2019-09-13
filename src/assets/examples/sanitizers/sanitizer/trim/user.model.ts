import { trim, sanitize } from '@rxweb/sanitizers'

@sanitize
export class User {


  @trim()
  freeText: string;

}
