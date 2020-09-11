import {  fileSizeAsync,prop, } from   "@rxweb/reactive-form-validators"   
import { of } from 'rxjs'; 

export class UserInfo {

	@prop()
	fileType: string;

	@prop()
	videoFile: string;

	@prop()
	audioFile: string;

	@prop()
	contactFile: string;

	@prop()
	profilePicture: string;

	@prop()
	excelFile: string;

}
