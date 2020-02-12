import {  endsWith, } from   "@rxweb/reactive-forms"   

export class User {

	@endsWith({value:'r'  ,messageKey:'endsWithMessageKey' }) 
	skill: string;
	
	
}
