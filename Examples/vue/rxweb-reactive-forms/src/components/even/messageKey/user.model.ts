import {  even, } from   "@rxweb/reactive-forms"   

export class User {

	@even({messageKey:'evenMessageKey' }) 
	otherEvenNumber: string;
	
	
}
