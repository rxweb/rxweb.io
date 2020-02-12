import {  mac, } from   "@rxweb/reactive-forms"   

export class MacAddressInfo {

	@mac({messageKey:'macMessageKey' }) 
	serverMacAddress: string;
	
	
}
