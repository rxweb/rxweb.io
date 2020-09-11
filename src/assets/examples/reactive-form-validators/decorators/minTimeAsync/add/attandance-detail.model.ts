import {  minTimeAsync, } from   "@rxweb/reactive-form-validators"   
import { of } from 'rxjs'; 

export class AttandanceDetail {

	@minTimeAsync({validatorConfig:of({value:'08:00'}) })
	entryTime: string;
	
	
}
