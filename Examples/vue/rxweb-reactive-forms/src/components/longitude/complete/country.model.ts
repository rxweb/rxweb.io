import {  longitude,prop, } from   "@rxweb/reactive-forms"   

export class Country {

	@prop()
	continent: string;

	//If you want to apply conditional expression of type 'function'
	@longitude({conditionalExpression:(x,y) => x.continent == "Asia"  }) 
	secondCountryLongitude: string;
	
	
	//If you want to apply conditional expression of type 'string'
	@longitude({conditionalExpression:'x => x.continent =="Asia"' }) 
	thirdCountryLongitude: string;
	
	
	@longitude({message:'{{0}} is not a longitude' }) 
	firstCountryLongitude: string;
	
	
	@longitude({messageKey:'longitudeMessageKey' }) 
	fourthCountryLongitude: string;
	
	
}
