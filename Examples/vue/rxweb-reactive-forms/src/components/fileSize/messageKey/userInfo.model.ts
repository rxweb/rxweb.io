import {  fileSize, } from   "@rxweb/reactive-forms"   

export class UserInfo {

	@fileSize({maxSize:100  ,messageKey:'fileSizeMessageKey' }) 
	excelFile: string;
	
	
}
