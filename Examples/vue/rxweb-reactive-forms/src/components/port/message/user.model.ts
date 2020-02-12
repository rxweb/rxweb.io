import {  port, } from   "@rxweb/reactive-forms"   

export class User {

	@port({message:'{{0}} is not a proper port number' }) 
	educationalWebsitePort: string;
	
	
}
