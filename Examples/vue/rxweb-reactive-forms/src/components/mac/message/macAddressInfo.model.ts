import {  mac, } from   "@rxweb/reactive-forms"   

export class MacAddressInfo {

	@mac({message:'{{0}} is not a MAC address' }) 
	systemMacAddress: string;
	
	
}
