import {  escape,prop } from   "@rxweb/reactive-form-validators"   

export class User {

	
	@prop()
	@escape() 
	freeText: string;
	
}
