import { Component } from '@angular/core';
import { ProductService } from './product.service';

@Component({
    selector: 'app-get-complete',
    templateUrl: './get-complete.component.html'
})
export class GetCompleteComponent  {
  constructor(private productService : ProductService){}
    result: any;
    GetProducts() {
        this.result = this.productService.get({path:'api/Products'});
    }
  
    AddProducts(){
        this.result = this.productService.addProduct({path:'api/SaveProduct'});
    }

    UpdateProducts(){
        this.result = this.productService.editProduct({path:'api/PutProduct'});
    }
}
