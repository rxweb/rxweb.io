import {  endsWithAsync, } from   "@rxweb/reactive-form-validators"   
import { of } from 'rxjs'; 

export class User {

	@endsWithAsync({validatorConfig:of({value:'b'  ,message:'{{0}} does not ends with `b`'}) })
	company: string;
	
	
}
