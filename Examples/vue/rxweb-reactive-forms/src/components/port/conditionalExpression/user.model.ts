import {  port,prop, } from   "@rxweb/reactive-forms"   

export class User {

	@prop()
	browser: string;

	//If you want to apply conditional expression of type 'string'
	@port({conditionalExpression:'x => x.browser =="Chrome"' }) 
	shoppingWebsitePort: string;
	
	
	//If you want to apply conditional expression of type 'function'
	@port({conditionalExpression:(x,y) => x.browser == "Chrome"  }) 
	entertainmentWebsitePort: string;
	
	
}
