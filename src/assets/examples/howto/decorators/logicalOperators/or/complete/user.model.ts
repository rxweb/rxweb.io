import { or } from   "@rxweb/reactive-form-validators"   

export class User {

  @or({validation:{contains:{value:'@gmail.com'},endsWith:{value:'.com'}}})
  email: string;	
	
}
