import {  containsAsync,prop, } from   "@rxweb/reactive-form-validators"   
import { of } from 'rxjs'; 

export class User {

	@prop()
	emailAddress: string;

	@prop()
	otherEmailAddress: string;

	@prop()
	organizationEmailAddress: string;

}
