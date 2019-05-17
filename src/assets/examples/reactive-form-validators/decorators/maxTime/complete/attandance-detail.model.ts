import {  maxTime,prop, } from   "@rxweb/reactive-form-validators"   

export class AttandanceDetail {

	@prop()
	entryPlace: string;

	@maxTime({value:'23:30' }) 
	closingTime: string;
	
	
	@maxTime({operator:'<'  ,value:'00:10' }) 
	breakHours: string;
	
	
	//If you want to apply conditional expression of type 'function'
	@maxTime({conditionalExpression:(x,y) => x.entryPlace == "Main Entry Gate"   ,value:'12:00' }) 
	totalInTime: string;
	
	
	//If you want to apply conditional expression of type 'string'
	@maxTime({conditionalExpression:'x => x.entryPlace == "Main Entry Gate"'  ,value:'11:00' }) 
	entryTime: string;
	
	
	@maxTime({allowSeconds:true  ,value:'02:00:00' }) 
	totalOutTime: string;
	
	
	@maxTime({message:'You can enter only time format data'  ,fieldName:'closingTime' }) 
	exitTime: string;
	
	
	@maxTime({messageKey:'maxTimeMessageKey'  ,fieldName:'totalInTime' }) 
	netInTime: string;
	
	
}
