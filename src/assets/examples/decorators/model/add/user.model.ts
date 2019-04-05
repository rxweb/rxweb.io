import {  prop,elementClass,model } from "@rxweb/reactive-form-validators"
import { AbstractControl } from "@angular/forms"

@model([{
    propNames: [":all:"], validationConfig: { required: true }, error: { conditionalExpression: (c) => c.dirty }, excludePropNames: ["userName"]
}, { propNames: ['userName'], validationConfig: { alpha: { allowWhiteSpace: true } } }])
export class User{

@prop()
userName:string;

@prop()
password:string;

@prop()
cityName:string;

@prop()
countryName:string;

@prop()
areaName:string;
}