import {  ascii, } from   "@rxweb/reactive-forms"   

export class User {

	@ascii({messageKey:'asciiMessageKey' }) 
	digitalCode: string;
	
	
}
