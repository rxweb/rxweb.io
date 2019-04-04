import {  dataUri, } from   "@rxweb/reactive-form-validators"   

export class User {

	@dataUri({messageKey:'dataUriMessageKey' }) 
	pdfDataUri: string;
	
	
}
