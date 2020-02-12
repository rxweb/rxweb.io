import {  url, } from   "@rxweb/reactive-form-validators"   

export class User {

	@url({messageKey:'urlMessageKey' }) 
	deployedWebSiteUrl: string;
	
	
}
