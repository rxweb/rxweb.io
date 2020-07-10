import {  port, } from   "@rxweb/reactive-form-validators"   

export class User {

	@port({messageKey:'portMessageKey' }) 
	commercialWebsitePort: string;
	
	
}
