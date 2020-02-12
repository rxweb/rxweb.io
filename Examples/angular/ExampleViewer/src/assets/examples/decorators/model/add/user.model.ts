import {  prop,elementClass,model } from "@rxweb/reactive-form-validators"
import { AbstractControl } from "@angular/forms"

@model([{
    propNames: [":all:"], validationConfig: { required: true } }])
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