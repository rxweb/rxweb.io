import {  url,prop, } from   "@rxweb/reactive-forms"   

export class User {

	@prop()
	adminWebsiteUrl: string;

	@prop()
	customerWebsiteUrl: string;

	@prop()
	maintenanceWebSiteUrl: string;

	@prop()
	deployedWebSiteUrl: string;

}
