import {  mac,prop, } from   "@rxweb/reactive-forms"   

export class MacAddressInfo {

	@prop()
	device: string;

	@prop()
	localMacAddress: string;

	@prop()
	systemMacAddress: string;

	@prop()
	serverMacAddress: string;

}
