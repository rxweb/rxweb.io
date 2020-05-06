import {  required, prop, } from   "@rxweb/reactive-form-validators"   

export class User {

    @required()
	permanentAddress : string;
	
	
    @prop()
    IsSameAddress:boolean;
    
	//If you want to apply conditional expression of type 'function'
	@required({ disableExpression: (x, y) => { return x.IsSameAddress == true }}) 
	currentAddress: string;
	
	
}
