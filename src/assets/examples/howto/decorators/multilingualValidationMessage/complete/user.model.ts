import {  required,alpha} from   "@rxweb/reactive-form-validators"   

export class UserInfo {

	@required() 
	firstName: string;
	
    @alpha()
    userName : string;
	
}