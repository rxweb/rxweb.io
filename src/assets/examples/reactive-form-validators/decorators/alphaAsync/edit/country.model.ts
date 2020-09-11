import {  alphaAsync, } from   "@rxweb/reactive-form-validators"   
import { of } from 'rxjs'; 

export class Country {

	@alphaAsync() 
	countryName: string;
	
	
}
