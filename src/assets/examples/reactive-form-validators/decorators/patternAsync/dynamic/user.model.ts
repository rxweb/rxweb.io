import {  patternAsync,prop, } from   "@rxweb/reactive-form-validators"   
import { of } from 'rxjs'; 

export class User {

	@prop()
	userName: string;

	@prop()
	zipCode: string;

	@prop()
	pinCode: string;

}
