import { not } from   "@rxweb/reactive-form-validators"   

export class User {


  @not({validation:{maxNumber:{value:9},minNumber:{value:100}}})
  age: string;
	
	
}