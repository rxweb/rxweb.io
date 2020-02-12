import {  image,prop, } from   "@rxweb/reactive-forms"   

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
	aadharCard: string;

	@prop()
	residenceProof: string;

	@prop()
	passport: string;

}
