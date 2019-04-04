import {  fileSize, } from   "@rxweb/reactive-form-validators"   

export class UserInfo {

	@fileSize({maxSize:50  ,messageKey:'fileSizeMessageKey' }) 
	excelFile: string;
	
	
}
