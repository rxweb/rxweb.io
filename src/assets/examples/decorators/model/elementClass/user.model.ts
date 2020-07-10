import {  prop,elementClass,model } from "@rxweb/reactive-form-validators"
import { AbstractControl } from "@angular/forms"

@model([{
    propNames: [":all:"], 
   elementClass: {
       conditionalExpression: function (c) {
           return this.password == "complex" && c.dirty == true ? 'dirty' : '';
       }}
    }])
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