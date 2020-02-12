import {  file, } from   "@rxweb/reactive-forms"   

export class UserInfo {

	@file({maxFiles:5 }) 
	totalImageFiles: number;
	
	
}
