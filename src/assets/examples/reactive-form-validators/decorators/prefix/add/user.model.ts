import {  prefix,prop } from   "@rxweb/reactive-form-validators"   

export class User {

	
	@prop()
	@prefix('Dr' ) 
	doctorName: string;
	
}
