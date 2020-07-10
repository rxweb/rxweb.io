import {  prop,model } from "@rxweb/reactive-form-validators"
import { AbstractControl } from "@angular/forms"

@model([{
    propNames: ["userName"],
    ignore:(x)=>x.type == "Admin"}])
export class User{

@prop()
type:string;

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