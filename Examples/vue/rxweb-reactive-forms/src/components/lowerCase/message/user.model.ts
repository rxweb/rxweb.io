import {  lowerCase, } from   "@rxweb/reactive-forms"   

export class User {

	//Shows custom message
	@lowerCase({message:'You can enter only lowerCase letters.' }) 
	lastName: string;
	
	
}
