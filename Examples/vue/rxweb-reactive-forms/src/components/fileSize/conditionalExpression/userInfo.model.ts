import {  fileSize,prop, } from   "@rxweb/reactive-forms"   

export class UserInfo {

	@prop()
	fileType: string;

	@fileSize({maxSize:50  ,conditionalExpression:'x => x.fileType == "Picture"' }) 
	imageFile: string;
	
	
	@fileSize({maxSize:10  ,conditionalExpression:'(x,y) => x.fileType == "Document"' }) 
	documentFile: string;
	
	
}
