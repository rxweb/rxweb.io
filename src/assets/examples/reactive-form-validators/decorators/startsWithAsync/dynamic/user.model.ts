import {  startsWithAsync,prop, } from   "@rxweb/reactive-form-validators"   
import { of } from 'rxjs'; 

export class User {

	@prop()
	name: string;

	@prop()
	department: string;

	@prop()
	company: string;

	@prop()
	skill: string;

}
