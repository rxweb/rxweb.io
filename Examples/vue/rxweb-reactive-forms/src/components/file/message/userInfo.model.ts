import {  file, } from   "@rxweb/reactive-forms"   

export class UserInfo {

	@file({minFiles:5  ,maxFiles:10  ,message:'You can upload minimum 5 and maximum 10 files.' }) 
	minMaxFiles: string;
	
	
}
