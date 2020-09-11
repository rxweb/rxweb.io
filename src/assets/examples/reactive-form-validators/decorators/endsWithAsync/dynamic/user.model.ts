import {  endsWithAsync,prop, } from   "@rxweb/reactive-form-validators"   
import { of } from 'rxjs'; 

export class User {

	@prop()
	name: string;

	@prop()
	company: string;

	@prop()
	skill: string;

}
