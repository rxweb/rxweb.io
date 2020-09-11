import {  extensionAsync,prop, } from   "@rxweb/reactive-form-validators"   
import { of } from 'rxjs'; 

export class UserInfo {

	@prop()
	fileType: string;

	@prop()
	profilePicture: string;

	@prop()
	contactFile: string;

	@prop()
	excelFile: string;

}
