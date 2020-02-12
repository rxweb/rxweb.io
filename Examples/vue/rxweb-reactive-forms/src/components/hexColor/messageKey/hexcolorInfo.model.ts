import {  hexColor, } from   "@rxweb/reactive-forms"   

export class HexcolorInfo {

	@hexColor({messageKey:'hexColorMessageKey' }) 
	titleHexcolorCode: string;
	
	
}
