import {  required, } from   "@rxweb/reactive-forms"   

export class User {

	@required({message:'Username cannot be blank.' }) 
	userName: string;
	
	
}
