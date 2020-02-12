import {  toDate,prop } from   "@rxweb/reactive-forms"   

export class User {

	
	@prop()
	@toDate() 
	dob: Date;
	
}
