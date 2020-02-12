import {  toBoolean,prop } from   "@rxweb/reactive-forms"   

export class User {

	
	@prop()
	@toBoolean() 
	active: boolean;
	
	
	@prop()
	@toBoolean(true ) 
	strictActive: boolean;
	
}
