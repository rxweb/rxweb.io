import {  url, } from   "@rxweb/reactive-form-validators"   

export class User {

	@url() 
	adminWebsiteUrl: string;
	
	
	//If you want to apply conditional expression of type 'function'
	@url({conditionalExpression:(x,y) => x.adminWebsiteUrl == "https://google.co.in"  }) 
	qaWebsiteUrl: string;
	
	
	//If you want to apply conditional expression of type 'string'
	@url({conditionalExpression:'x => x.adminWebsiteUrl == "https://google.co.in"'  }) 
	customerWebsiteUrl: string;
	
	
	@url({message:'{{0}} Is not the correct url pattern.' }) 
	maintenanceWebSiteUrl: string;
	
	
	@url({urlValidationType:1 }) 
	fqdnDomainUrl: string;
	
	
	@url({urlValidationType:2 }) 
	localhostUrl: string;
	
	
	@url({urlValidationType:3 }) 
	intraServerUrl: string;
	
	
	@url({messageKey:'urlMessageKey' }) 
	deployedWebSiteUrl: string;
	
	
}
