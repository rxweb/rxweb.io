import {  factorAsync,prop, } from   "@rxweb/reactive-form-validators"   
import { of } from 'rxjs'; 

export class User {

	@prop()
	firstNumber: number;

	@prop()
	fifthNumber: number;

	@prop()
	fourthNumber: number;

	@prop()
	sixthNumber: number;

	@prop()
	seventhNumber: number;

}
