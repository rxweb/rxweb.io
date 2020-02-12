import {  sanitize,prop } from   "@rxweb/reactive-form-validators"   

export class User {

	
	@prop()
	@sanitize({custom:(x)=> x == '1K' ? 1000  : x  })
	amount: string;
	
}
