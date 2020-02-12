import {  alpha, } from   "@rxweb/reactive-forms"   

export class AddressInfo {

	@alpha({message:'You can enter only alphabets.' }) 
	stateCode: string;
	
	
}
