import {  urlAsync, } from   "@rxweb/reactive-form-validators"   
import { of } from 'rxjs'; 

export class User {

	@urlAsync() 
	adminWebsiteUrl: string;
	
	
	@urlAsync({validatorConfig:of({message:'{{0}} Is not the correct url pattern.'}) })
	maintenanceWebSiteUrl: string;
	
	
	@urlAsync({validatorConfig:of({urlValidationType:2}) })
	localhostUrl: string;
	
	
	@urlAsync({validatorConfig:of({urlValidationType:1}) })
	fqdnDomainUrl: string;
	
	
	@urlAsync({validatorConfig:of({urlValidationType:3}) })
	intraServerUrl: string;
	
	
	@urlAsync({validatorConfig:of({messageKey:'urlMessageKey'}) })
	deployedWebSiteUrl: string;
	
	
}
