import {  ascii, } from   "@rxweb/reactive-form-validators"   

export class User {

	@ascii({messageKey:'asciiMessageKey' }) 
	digitalCode: string;
	
	
}
