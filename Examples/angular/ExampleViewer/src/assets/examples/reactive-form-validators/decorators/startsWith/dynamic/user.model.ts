import {  startsWith,prop, } from   "@rxweb/reactive-form-validators"   

export class User {

	@prop()
	name: string;

	@prop()
	department: string;

	@prop()
	taskId: string;

	@prop()
	company: string;

	@prop()
	skill: string;

}
