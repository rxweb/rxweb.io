import {  whitelist,prop } from   "@rxweb/reactive-forms"   

export class User {

	
	@prop()
	@whitelist('abc' ) 
	freeText: string;
	
}
