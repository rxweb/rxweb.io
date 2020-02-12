import {  odd, } from   "@rxweb/reactive-forms"   

export class User {

	@odd({message:'{{0}} is not an odd number' }) 
	multiplesOfOddNumber: number;
	
	
}
