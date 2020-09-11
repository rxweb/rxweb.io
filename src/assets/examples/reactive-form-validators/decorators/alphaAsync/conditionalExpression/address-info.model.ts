import {  alphaAsync, } from   "@rxweb/reactive-form-validators"   
import { of } from 'rxjs'; 

export class AddressInfo {

	@alphaAsync() 
	countryName: string;
	
	
	//If you want to apply conditional expression of type 'string'
	@alphaAsync({validatorConfig:of({conditionalExpression:'x => x.countryName =="India"'}) })
	cityName: string;
	
	
	//If you want to apply conditional expression of type 'function'
	@alphaAsync({validatorConfig:of({conditionalExpression:(x,y) => x.countryName == "India"}) })
	countryCode: string;
	
	
}
