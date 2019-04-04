import {  mac, } from   "@rxweb/reactive-form-validators"   

export class MacAddressInfo {

	@mac({messageKey:'macMessageKey' }) 
	serverMacAddress: string;
	
	
}
