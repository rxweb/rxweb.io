import {  minTime, } from   "@rxweb/reactive-form-validators"   

export class AttandanceDetail {

	@minTime({allowSeconds:true  ,value:'00:10:00' }) 
	totalOutTime: string;
	
	
}
