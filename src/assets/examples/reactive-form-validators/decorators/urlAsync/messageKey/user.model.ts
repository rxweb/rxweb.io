import {  urlAsync, } from   "@rxweb/reactive-form-validators"   
import { of } from 'rxjs'; 

export class User {

	@urlAsync({validatorConfig:of({messageKey:'urlMessageKey'}) })
	deployedWebSiteUrl: string;
	
	
}
