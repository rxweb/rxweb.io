import {  prop} from   "@rxweb/reactive-form-validators"   


export class User {
    @prop({ isPrimaryKey: true})
    userId: number;

	@prop() 
	firstName: string;
	
   
}