import {  maxTimeAsync, } from   "@rxweb/reactive-form-validators"   
import { of } from 'rxjs'; 

export class AttandanceDetail {

	@maxTimeAsync({validatorConfig:of({allowSeconds:true  ,value:'02:00:00'}) })
	totalOutTime: string;
	
	
}
