import {  endsWith, } from   "@rxweb/reactive-forms"   

export class User {

	@endsWith({value:'t' }) 
	name: string;
	
	
}
