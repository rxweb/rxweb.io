import {  url, } from   "@rxweb/reactive-forms"   

export class User {

	@url({message:'{{0}} Is not the correct url pattern.' }) 
	maintenanceWebSiteUrl: string;
	
	
}
