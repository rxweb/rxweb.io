import {  extension, } from   "@rxweb/reactive-forms"   

export class UserInfo {

	@extension({extensions:['jpg','bmp'] }) 
	profilePicture: string;
	
	
}
