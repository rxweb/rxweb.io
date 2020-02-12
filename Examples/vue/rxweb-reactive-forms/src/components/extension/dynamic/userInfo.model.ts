import {  extension,prop, } from   "@rxweb/reactive-forms"   

export class UserInfo {

	@prop()
	fileType: string;

	@prop()
	profilePicture: string;

	@prop()
	imageFile: string;

	@prop()
	contactFile: string;

	@prop()
	excelFile: string;

}
