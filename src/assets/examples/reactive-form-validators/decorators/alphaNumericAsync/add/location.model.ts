import {  alphaNumericAsync, } from   "@rxweb/reactive-form-validators"   
import { of } from 'rxjs'; 

export class Location {

	@alphaNumericAsync() 
	areaName: string;
	
	
}
