import {  greaterThanAsync,prop, } from   "@rxweb/reactive-form-validators"   
import { of } from 'rxjs'; 

export class User {

	@prop()
	age: number;

	@prop()
	retiermentAge: number;

	@prop()
	minimumAge: number;

	@prop()
	otherAge: number;

	@prop()
	joiningAge: number;

}
