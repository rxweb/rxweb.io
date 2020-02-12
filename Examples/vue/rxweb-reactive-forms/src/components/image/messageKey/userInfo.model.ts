import {  image, } from   "@rxweb/reactive-forms"   

export class UserInfo {

	@image({maxHeight:100  ,maxWidth:100  ,messageKey:'imageMessageKey' }) 
	passport: string;
	
	
}
