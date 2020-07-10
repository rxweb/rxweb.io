import {  prop,elementClass,model,required } from "@rxweb/reactive-form-validators"
import { AbstractControl } from "@angular/forms"

@model([{
  propNames: [":all:"], validationConfig: { required: true }, error:  {conditionalExpression:function(control:AbstractControl){ return this.userName == "john"} } 
}, ])
export class User{

@prop()
userName:string;

@prop()
@required()
password:string;

@prop()
cityName:string;

@prop()
countryName:string;

@prop()
areaName:string;
}