import {  json, } from   "@rxweb/reactive-form-validators"   

export class JsonInfo {

	@json({messageKey:'jsonMessageKey' }) 
	countryJson: string;
	
	
}
