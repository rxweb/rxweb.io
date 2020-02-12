import {  minTime, } from   "@rxweb/reactive-forms"   

export class AttandanceDetail {

	@minTime({allowSeconds:true  ,value:'00:10:00' }) 
	totalOutTime: string;
	
	
}
