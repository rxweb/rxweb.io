import {  endsWith,prop, } from   "@rxweb/reactive-forms"   

export class User {

	@prop()
	name: string;

	@prop()
	taskId: string;

	@prop()
	company: string;

	@prop()
	skill: string;

}
