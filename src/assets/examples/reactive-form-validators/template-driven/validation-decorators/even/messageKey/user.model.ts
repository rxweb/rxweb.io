import {  even, } from   "@rxweb/reactive-form-validators"   

export class User {

	@even({messageKey:'evenMessageKey' }) 
	otherEvenNumber: string;
	
	
}
