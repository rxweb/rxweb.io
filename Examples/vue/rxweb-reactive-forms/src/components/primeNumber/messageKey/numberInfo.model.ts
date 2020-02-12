import {  primeNumber, } from   "@rxweb/reactive-forms"   

export class NumberInfo {

	@primeNumber({messageKey:'primeNumberMessageKey' }) 
	fourthNumber: string;
	
	
}
