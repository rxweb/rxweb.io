import {  endsWithAsync, } from   "@rxweb/reactive-form-validators"   
import { of } from 'rxjs'; 

export class User {

	@endsWithAsync({validatorConfig:of({value:'t'}) })
	name: string;
	
	
}
