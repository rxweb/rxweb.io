import {  minDateAsync,prop, } from   "@rxweb/reactive-form-validators"   
import { of } from 'rxjs'; 

export class User {

	@prop()
	userName: string;

	@minDateAsync({validatorConfig:of({value:'07/30/2018'}) })
	allocationDate: string;
	
	
	@minDateAsync({validatorConfig:of({value:'07/30/2018'  ,message:'{{0}} exceeds the Minimum Date Limit'}) })
	registrationDate: string;
	
	
	@prop()
	enrollmentDate: string;

	@minDateAsync({validatorConfig:of({fieldName:'enrollmentDate'}) })
	lastRegistrationDate: string;
	
	
	@minDateAsync({validatorConfig:of({value:'07/30/2018'  ,operator:'>'}) })
	confirmationDate: string;
	
	
	@minDateAsync({validatorConfig:of({value:'07/30/2018'  ,messageKey:'minDateMessageKey'}) })
	resignationDate: string;
	
	
}
