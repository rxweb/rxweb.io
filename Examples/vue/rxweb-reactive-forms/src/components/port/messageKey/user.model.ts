import {  port, } from   "@rxweb/reactive-forms"   

export class User {

	@port({messageKey:'portMessageKey' }) 
	commercialWebsitePort: string;
	
	
}
