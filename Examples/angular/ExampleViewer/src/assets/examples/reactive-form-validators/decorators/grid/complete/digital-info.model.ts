import {  grid, } from   "@rxweb/reactive-form-validators"   

export class DigitalInfo {

	@grid() 
	soundRecordingGrid: string;
	
	
	@grid({conditionalExpression:(x,y) => x.soundRecordingGrid == "A12425GABC1234002M" }) 
	audioVisualRecordingGrid: string;
	
	
	//If you want to apply conditional expression of type 'string'
	@grid({conditionalExpression:'x => x.soundRecordingGrid =="A12425GABC1234002M"' }) 
	photographGrid: string;
	
	
	@grid({message:'This is Not valid GRid' }) 
	graphicImageGrid: string;
	
	
	@grid({messageKey:'gridMessageKey' }) 
	videoGraphicGrid: string;
	
	
}
