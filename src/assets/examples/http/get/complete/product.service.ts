import { Injectable } from "@angular/core";
import { http, RxHttp } from "@rxweb/http";
import { BrowserStorage } from "src/assets/examples/storage/browser-storage";

@http({
    path: "",
    hostKey:'local'
})
@Injectable({
    providedIn: 'root'
})
export class ProductService extends RxHttp {
    markAsDirty:boolean;
    constructor(private browserStorage: BrowserStorage) {
        super();
    }

    addProduct(product?: any) {
        //product.createdBy = this.browserStorage.local.get('userId', true);
      //  product.createdDate = new Date();
        return this.post({path:'api/SaveProduct', body: product });
    }

    editProduct(product?: any,id?:number){
      // product.markAsActive =  this.markAsDirty;
       return this.put({path:'api/PutProduct',body:product});
    }

}