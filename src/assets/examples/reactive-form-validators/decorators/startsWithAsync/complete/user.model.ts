import {  startsWithAsync, } from   "@rxweb/reactive-form-validators"   
import { of } from 'rxjs'; 

export class User {

	@startsWithAsync({validatorConfig:of({value:'B'}) })
	name: string;
	
	
	@startsWithAsync({validatorConfig:of({value:'D'  ,isRestrict:true}) })
	department: string;
	
	
	@startsWithAsync({validatorConfig:of({value:'R'  ,message:'{{0}} does not starts with `R`'}) })
	company: string;
	
	
	@startsWithAsync({validatorConfig:of({value:'A'  ,messageKey:'startsWithMessageKey'}) })
	skill: string;
	
	
}
