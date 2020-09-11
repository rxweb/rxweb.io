import {  startsWithAsync, } from   "@rxweb/reactive-form-validators"   
import { of } from 'rxjs'; 

export class User {

	@startsWithAsync({validatorConfig:of({value:'n'}) })
	name: string;
	
	
}
