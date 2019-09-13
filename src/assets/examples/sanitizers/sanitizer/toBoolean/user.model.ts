import { toBoolean, sanitize } from '@rxweb/sanitizers'

@sanitize
export class User {


  @toBoolean(true)
  name: string;

}
