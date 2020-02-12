import {  fileSize, } from   "@rxweb/reactive-forms"   

export class UserInfo {

	@fileSize({minSize:3  ,maxSize:100 }) 
	audioFile: string;
	
	
}
