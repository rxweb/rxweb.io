import {  toBoolean,prop } from   "@rxweb/reactive-forms"   

export class User {

	
	@prop()
	@toBoolean(true ) 
	strictActive: boolean;
	
}
