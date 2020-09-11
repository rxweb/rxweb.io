import {  minDateAsync, } from   "@rxweb/reactive-form-validators"   
import { of } from 'rxjs'; 

export class User {

	@minDateAsync({validatorConfig:of({value:'07/30/2018'  ,message:'{{0}} exceeds the Minimum Date Limit'}) })
	registrationDate: string;
	
	
}
