import {  prop } from "@rxweb/reactive-form-validators"

export class Product{
   
  @prop()
  productId:number;

  @prop()
  productName:string;
}

export class Order extends Product  {
   @prop()
   orderId:number;

   @prop()
   orderType:string;
}