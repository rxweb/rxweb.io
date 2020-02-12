import {  endsWith, } from   "@rxweb/reactive-forms"   

export class User {

	@endsWith({value:'b'  ,message:'{{0}} does not ends with `b`' }) 
	company: string;
	
	
}
