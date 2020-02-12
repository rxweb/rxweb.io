import {  lowerCase, } from   "@rxweb/reactive-forms"   

export class User {

	@lowerCase() 
	username: string;
	
	
	//If you want to apply conditional expression of type 'function'
	@lowerCase({conditionalExpression:(x,y) =>  x.username == "jonathan.feldman"  }) 
	firstName: string;
	
	
	//If you want to apply conditional expression of type 'string'
	@lowerCase({conditionalExpression:'x => x.username == "jonathan.feldman"' }) 
	middleName: string;
	
	
	//Shows custom message
	@lowerCase({message:'You can enter only lowerCase letters.' }) 
	lastName: string;
	
	
	//Shows custom message based on message key
	@lowerCase({messageKey:'lowerCaseMessageKey' }) 
	state: string;
	
	
}
