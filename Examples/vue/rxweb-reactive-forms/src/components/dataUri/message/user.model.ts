import {  dataUri, } from   "@rxweb/reactive-forms"   

export class User {

	@dataUri({message:'{{0}} is not a proper data URI' }) 
	videoDataUri: string;
	
	
}
