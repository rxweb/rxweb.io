import {  urlAsync, } from   "@rxweb/reactive-form-validators"   
import { of } from 'rxjs'; 

export class User {

	@urlAsync({validatorConfig:of({message:'{{0}} Is not the correct url pattern.'}) })
	maintenanceWebSiteUrl: string;
	
	
}
