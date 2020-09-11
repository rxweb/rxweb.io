import {  maxLengthAsync,prop, } from   "@rxweb/reactive-form-validators"   
import { of } from 'rxjs'; 

export class User {

	@prop()
	firstName: string;

	@prop()
	userName: string;

	@prop()
	fullName: string;

}
