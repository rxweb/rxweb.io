import {  file, } from   "@rxweb/reactive-forms"   

export class UserInfo {

	@file({minFiles:5 }) 
	totalDocumentFiles: number;
	
	
}
