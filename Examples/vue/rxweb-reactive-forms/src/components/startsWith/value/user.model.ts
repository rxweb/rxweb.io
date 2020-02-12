import {  startsWith, } from   "@rxweb/reactive-forms"   

export class User {

	@startsWith({value:'B' }) 
	name: string;
	
	
}
