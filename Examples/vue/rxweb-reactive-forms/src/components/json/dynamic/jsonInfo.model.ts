import {  json,prop, } from   "@rxweb/reactive-forms"   

export class JsonInfo {

	@prop()
	location: string;

	@prop()
	locationJson: string;

	@prop()
	contactJson: string;

	@prop()
	countryJson: string;

}
