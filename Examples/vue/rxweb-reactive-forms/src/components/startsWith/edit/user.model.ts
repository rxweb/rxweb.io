import {  startsWith, } from   "@rxweb/reactive-forms"   

export class User {

	@startsWith({value:'n' }) 
	name: string;
	
	
}
