import { escape, sanitize } from '@rxweb/sanitizers'

@sanitize
export class User {


  @escape()
  freeText: string;

}
