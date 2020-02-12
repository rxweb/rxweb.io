import {  startsWith, } from   "@rxweb/reactive-form-validators"   

export class User {

	@startsWith({value:'A'  ,messageKey:'startsWithMessageKey' }) 
	skill: string;
	
	
}
