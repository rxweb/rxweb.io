import {  startsWith, } from   "@rxweb/reactive-forms"   

export class User {

	@startsWith({value:'R'  ,message:'{{0}} does not starts with `R`' }) 
	company: string;
	
	
}
