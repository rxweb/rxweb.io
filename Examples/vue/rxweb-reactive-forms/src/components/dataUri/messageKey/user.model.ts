import {  dataUri, } from   "@rxweb/reactive-forms"   

export class User {

	@dataUri({messageKey:'dataUriMessageKey' }) 
	pdfDataUri: string;
	
	
}
