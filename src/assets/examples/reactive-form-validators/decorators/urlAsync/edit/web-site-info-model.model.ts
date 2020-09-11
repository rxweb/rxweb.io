import {  urlAsync, } from   "@rxweb/reactive-form-validators"   
import { of } from 'rxjs'; 

export class WebSiteInfoModel {

	@urlAsync() 
	adminWebsiteUrl: string;
	
	
}
