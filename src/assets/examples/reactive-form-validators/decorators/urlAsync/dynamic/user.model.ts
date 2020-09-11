import {  urlAsync,prop, } from   "@rxweb/reactive-form-validators"   
import { of } from 'rxjs'; 

export class User {

	@prop()
	adminWebsiteUrl: string;

	@prop()
	maintenanceWebSiteUrl: string;

	@prop()
	localhostUrl: string;

	@prop()
	fqdnDomainUrl: string;

	@prop()
	intraServerUrl: string;

	@prop()
	deployedWebSiteUrl: string;

}
