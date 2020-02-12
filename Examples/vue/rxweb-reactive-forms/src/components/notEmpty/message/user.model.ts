import {  notEmpty, } from   "@rxweb/reactive-forms"   

export class User {

	@notEmpty({message:'Username cannot be blank.' }) 
	userName: string;
	
	
}
