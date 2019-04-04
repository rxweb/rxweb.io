import {  endsWith, } from   "@rxweb/reactive-form-validators"   

export class User {

	@endsWith({value:'r'  ,messageKey:'endsWithMessageKey' }) 
	skill: string;
	
	
}
