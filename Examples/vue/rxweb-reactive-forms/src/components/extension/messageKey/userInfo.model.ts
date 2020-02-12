import {  extension, } from   "@rxweb/reactive-forms"   

export class UserInfo {

	@extension({extensions:['xls','xlsx']  ,messageKey:'extensionMessageKey' }) 
	excelFile: string;
	
	
}
