import {  time, } from   "@rxweb/reactive-forms"   

export class AttandanceDetail {

	@time({allowSeconds:true }) 
	totalOutTime: string;
	
	
}
