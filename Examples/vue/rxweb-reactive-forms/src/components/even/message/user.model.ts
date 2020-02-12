import {  even, } from   "@rxweb/reactive-forms"   

export class User {

	@even({message:'{{0}} is not an even number' }) 
	multiplesOfEvenNumber: number;
	
	
}
