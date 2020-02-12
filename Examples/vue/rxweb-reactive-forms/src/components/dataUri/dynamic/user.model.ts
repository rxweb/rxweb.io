import {  dataUri,prop, } from   "@rxweb/reactive-forms"   

export class User {

	@prop()
	scheme: string;

	@prop()
	audioDataUri: string;

	@prop()
	videoDataUri: string;

	@prop()
	pdfDataUri: string;

}
