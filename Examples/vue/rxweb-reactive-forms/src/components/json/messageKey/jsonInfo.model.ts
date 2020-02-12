import {  json, } from   "@rxweb/reactive-forms"   

export class JsonInfo {

	@json({messageKey:'jsonMessageKey' }) 
	countryJson: string;
	
	
}
