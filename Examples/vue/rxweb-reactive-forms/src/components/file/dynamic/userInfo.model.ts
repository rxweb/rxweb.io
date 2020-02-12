import {  file,prop, } from   "@rxweb/reactive-forms"   

export class UserInfo {

	@prop()
	fileType: string;

	@prop()
	totalImageFiles: number;

	@prop()
	totalDocumentFiles: number;

	@prop()
	minimumFiles: string;

	@prop()
	minMaxFiles: string;

	@prop()
	excelFiles: string;

}
