import { and } from   "@rxweb/reactive-form-validators"   

export class User {

  @and({validation:{alphaNumeric:{allowWhiteSpace:true},maxLength:{value:50}}})
  flatAddress: string;
	
}
