import {  maxDateAsync, } from   "@rxweb/reactive-form-validators"   
import { of } from 'rxjs'; 

export class User {

	@maxDateAsync({validatorConfig:of({value:'07/30/2018'  ,operator:'<'}) })
	confirmationDate: string;
	
	
}
