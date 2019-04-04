import {  grid, } from   "@rxweb/reactive-form-validators"   

export class DigitalInfo {

	@grid({messageKey:'gridMessageKey' }) 
	videoGraphicGrid: string;
	
	
}
