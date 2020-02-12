import {  file, } from   "@rxweb/reactive-forms"   

export class UserInfo {

	@file({minFiles:2  ,maxFiles:5  ,messageKey:'fileMessageKey' }) 
	excelFiles: string;
	
	
}
