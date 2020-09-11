import {  minTimeAsync, } from   "@rxweb/reactive-form-validators"   
import { of } from 'rxjs'; 

export class AttandanceDetail {

	@minTimeAsync({validatorConfig:of({message:'You can enter only time format data greater than config value'  ,value:'07:00'}) })
	exitTime: string;
	
	
}
