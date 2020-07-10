import {  url, } from   "@rxweb/reactive-form-validators"   

export class User {

	@url({urlValidationType:2 }) 
	localhostUrl: string;
	
	
}
