import {  imageAsync,prop, } from   "@rxweb/reactive-form-validators"   
import { of } from 'rxjs';

export class UserInfo {

	@prop()
	imageType: string;

	@prop()
	profilePhoto: string;

	@prop()
	signature: string;

	@prop()
	voterId: string;

	@prop()
	identityCard: string;

	@prop()
	drivinglicense: string;

	@prop()
	residenceProof: string;

	@prop()
	passport: string;

}
