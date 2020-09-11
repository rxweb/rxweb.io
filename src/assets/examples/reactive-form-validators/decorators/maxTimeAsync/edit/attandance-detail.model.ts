import {  maxTimeAsync, } from   "@rxweb/reactive-form-validators"   
import { of } from 'rxjs'; 

export class AttandanceDetail {

	@maxTimeAsync({validatorConfig:of({value:'11:00'}) })
	entryTime: string;
	
	
}
