import {  primeNumber, } from   "@rxweb/reactive-form-validators"   

export class NumberInfo {

	@primeNumber({messageKey:'primeNumberMessageKey' }) 
	fourthNumber: string;
	
	
}
