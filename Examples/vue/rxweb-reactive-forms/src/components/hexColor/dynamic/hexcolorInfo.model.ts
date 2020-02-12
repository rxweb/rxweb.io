import {  hexColor,prop, } from   "@rxweb/reactive-forms"   

export class HexcolorInfo {

	@prop()
	color: string;

	@prop()
	headerHexcolorCode: string;

	@prop()
	bodyHexcolorCode: string;

	@prop()
	titleHexcolorCode: string;

}
