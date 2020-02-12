import {  startsWith, } from   "@rxweb/reactive-forms"   

export class User {

	@startsWith({value:'A'  ,messageKey:'startsWithMessageKey' }) 
	skill: string;
	
	
}
