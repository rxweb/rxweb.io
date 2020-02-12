import {  pattern, } from   "@rxweb/reactive-forms"   

export class User {

	@pattern({expression:{'onlyAlpha': /^[A-Za-z]+$/} }) 
	userName: string;
	
	
}
