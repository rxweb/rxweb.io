import {  notEmpty, } from   "@rxweb/reactive-form-validators"   

export class User {

	@notEmpty({message:'Username cannot be blank.' }) 
	userName: string;
	
	
}
