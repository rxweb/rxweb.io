import {  imageAsync,prop, } from   "@rxweb/reactive-form-validators"   
import { of } from 'rxjs';

export class UserInfo {

	@prop()
	imageType: string;

	@imageAsync({validatorConfig:of({maxHeight:100  ,maxWidth:100 })}) 
	profilePhoto: string;
	
	
	@imageAsync({validatorConfig:of({maxHeight:100  ,maxWidth:100 })}) 
	signature: string;
	
	
	@imageAsync({validatorConfig:of({minHeight:10  ,maxHeight:100  ,minWidth:10  ,maxWidth:10 })}) 
	voterId: string;
	
	
	@imageAsync({validatorConfig:of({minHeight:10  ,maxHeight:100  ,maxWidth:100 })}) 
	identityCard: string;
	
	
	@imageAsync({validatorConfig:of({maxHeight:100  ,maxWidth:100 })}) 
	drivinglicense: string;
	
	
	@imageAsync({validatorConfig:of({maxHeight:100  ,maxWidth:100  ,message:'File exceed maximum Height.' })}) 
	residenceProof: string;
	
	
	@imageAsync({validatorConfig:of({maxHeight:100  ,maxWidth:100  ,messageKey:'imageMessageKey' })}) 
	passport: string;
	
	
}
