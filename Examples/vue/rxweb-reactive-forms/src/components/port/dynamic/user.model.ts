import {  port,prop, } from   "@rxweb/reactive-forms"   

export class User {

	@prop()
	browser: string;

	@prop()
	shoppingWebsitePort: string;

	@prop()
	educationalWebsitePort: string;

	@prop()
	commercialWebsitePort: string;

}
