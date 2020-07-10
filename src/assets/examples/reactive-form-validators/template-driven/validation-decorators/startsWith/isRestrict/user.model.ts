import {  startsWith, } from   "@rxweb/reactive-form-validators"   

export class User {

	@startsWith({value:'D'  ,isRestrict:true }) 
	department: string;
	
	
}
