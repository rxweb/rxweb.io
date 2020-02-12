import {  blacklist,prop } from   "@rxweb/reactive-forms"   

export class User {

	
	@prop()
	@blacklist('abc' ) 
	freeText: string;
	
}
