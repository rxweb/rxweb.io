import {  maxDateAsync,prop, } from   "@rxweb/reactive-form-validators"   
import { of } from 'rxjs'; 

export class User {

	@prop()
	userName: string;

	@maxDateAsync({validatorConfig:of({value:'07/30/2018'}) })
	allocationDate: string;
	
	
	@maxDateAsync({validatorConfig:of({value:'07/30/2018'  ,message:'{{0}} exceeds the Maximum Date Limit'}) })
	registrationDate: string;
	
	
	@prop()
	enrollmentDate: string;

	@maxDateAsync({validatorConfig:of({fieldName:'enrollmentDate'}) })
	lastRegistrationDate: string;
	
	
	@maxDateAsync({validatorConfig:of({value:'07/30/2018'  ,operator:'<'}) })
	confirmationDate: string;
	
	
	@maxDateAsync({validatorConfig:of({value:'07/30/2018'  ,messageKey:'maxDateMessageKey'}) })
	resignationDate: string;
	
	
}
