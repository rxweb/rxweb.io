import {  fileAsync,prop, } from   "@rxweb/reactive-form-validators"   
import { of } from 'rxjs'; 

export class UserInfo {

	@prop()
	fileType: string;

	@prop()
	totalImageFiles: number;

	@prop()
	totalDocumentFiles: number;

	@prop()
	minMaxFiles: string;

	@prop()
	excelFiles: string;

}
