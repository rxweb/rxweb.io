import {  required } from   "@rxweb/reactive-form-validators"   

export class User {

	@required() 
	firstName: string;
	
	@required()
  lastName:string;
}
