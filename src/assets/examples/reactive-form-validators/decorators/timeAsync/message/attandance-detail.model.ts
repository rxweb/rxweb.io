import {  timeAsync, } from   "@rxweb/reactive-form-validators"   
import { of } from 'rxjs'; 

export class AttandanceDetail {

	@timeAsync({validatorConfig:of({message:'You can enter only time format data'}) })
	exitTime: string;
	
	
}
