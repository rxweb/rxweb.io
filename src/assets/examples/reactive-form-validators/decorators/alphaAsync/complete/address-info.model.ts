import {  alphaAsync, ValidationAlphabetLocale} from   "@rxweb/reactive-form-validators"   
import { of } from 'rxjs'; 

export class AddressInfo {

	@alphaAsync() 
	countryName: string;
	
	
	//If you want to apply conditional expression of type 'function'
	@alphaAsync({validatorConfig:of({conditionalExpression:(x,y) => x.countryName == "India"}) })
	countryCode: string;
	
	
	//If you want to apply conditional expression of type 'string'
	@alphaAsync({validatorConfig:of({conditionalExpression:'x => x.countryName =="India"'}) })
	cityName: string;
	
	
	@alphaAsync({validatorConfig:of({locale:ValidationAlphabetLocale.spanish}) })
	spanishcityName: string;
	
	
	@alphaAsync({validatorConfig:of({allowWhiteSpace:true}) })
	stateName: string;
	
	
	@alphaAsync({validatorConfig:of({message:'You can enter only alphabets.'}) })
	stateCode: string;
	
	
	@alphaAsync({validatorConfig:of({messageKey:'alphaMessageKey'}) })
	cityCode: string;
	
	
}
