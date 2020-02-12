import {  suffix,prop } from   "@rxweb/reactive-form-validators"   

export class User {

	
	@prop()
	@suffix('.com' ) 
	email: string;
	
}
