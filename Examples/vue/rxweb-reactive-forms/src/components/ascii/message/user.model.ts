import {  ascii, } from   "@rxweb/reactive-forms"   

export class User {

	@ascii({message:'{{0}} is not an Ascii Code' }) 
	specialCharAsciiCode: string;
	
	
}
