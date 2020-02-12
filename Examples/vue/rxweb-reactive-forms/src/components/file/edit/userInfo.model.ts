import {  file, } from   "@rxweb/reactive-forms"   

export class UserInfo {

	@file({maxFiles:5 }) 
	totalImageFiles: number;
	
	
	@file({minFiles:5 }) 
	totalDocumentFiles: number;
	
	
}
