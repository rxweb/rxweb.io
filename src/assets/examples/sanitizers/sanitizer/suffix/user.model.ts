import { suffix, sanitize } from '@rxweb/sanitizers'

@sanitize
export class User {


  @suffix('.com')
  freeText: string;

}
