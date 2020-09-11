import {  minNumberAsync,prop, } from   "@rxweb/reactive-form-validators"   
import { of } from 'rxjs'; 

export class ResultInfo {

	@prop()
	maths: number;

	@prop()
	science: number;

	@prop()
	economics: number;

}
