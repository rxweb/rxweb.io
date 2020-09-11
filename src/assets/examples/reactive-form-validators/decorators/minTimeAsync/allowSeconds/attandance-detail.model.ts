import {  minTimeAsync, } from   "@rxweb/reactive-form-validators"   
import { of } from 'rxjs'; 

export class AttandanceDetail {

	@minTimeAsync({validatorConfig:of({allowSeconds:true  ,value:'00:10:00'}) })
	totalOutTime: string;
	
	
}
