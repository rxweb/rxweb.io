import {  mask, mac, } from   "@rxweb/reactive-form-validators"   

export class User {

	@mac()
	@mask({mask:'mask:"**:**:**:**:**:**"'  ,valueWithMask:true }) 
	macNumber: string;
	
	
}
