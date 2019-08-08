import {  minTime,prop, } from   "@rxweb/reactive-form-validators"   

export class AttandanceDetail {

	@minTime({messageKey:'minTimeMessageKey', value:'00:08:30'})
	netInTime: string;

}
