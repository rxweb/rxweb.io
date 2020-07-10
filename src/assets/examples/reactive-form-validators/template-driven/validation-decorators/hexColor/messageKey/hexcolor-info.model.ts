import {  hexColor, } from   "@rxweb/reactive-form-validators"   

export class HexcolorInfo {

	@hexColor({messageKey:'hexColorMessageKey' }) 
	titleHexcolorCode: string;
	
	
}
