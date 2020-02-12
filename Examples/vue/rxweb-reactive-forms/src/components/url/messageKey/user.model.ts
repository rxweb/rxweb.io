import {  url, } from   "@rxweb/reactive-forms"   

export class User {

	@url({messageKey:'urlMessageKey' }) 
	deployedWebSiteUrl: string;
	
	
}
