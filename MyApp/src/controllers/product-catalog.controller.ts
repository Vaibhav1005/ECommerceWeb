import { IScopeCustom } from "../interfaces/iscope.interface";
import { Product } from "../models/product.model";
import { ProductService } from "../services/product.service";
export class ProductCatalogController{
    products: Product[] = [];
   static $inject = ['$scope','ProductService']
    constructor($scope: IScopeCustom,
        private productService: ProductService
    ){
        this.getProductsData();
        $scope['vm'] = this;
    }
    getProductsData(){
       this.productService.getProductsData().
       then((response) => {
        this.products = response.data;
      })
      .catch((error) => {
        console.error('Error loading products:', error);
      });
    }
    onAddCart(product: Product){
      var tempData : Product[] = [];
      if(product){
        tempData = JSON.parse(this.productService.getCartProducts());
        if(tempData){
          tempData.push(product);
        }
        if(tempData == null){tempData = []; tempData.push(product);}
        this.productService.addProductToCart(tempData);
        alert('Item added to cart successfully!!')
      }
    }
      getLoggedInUser(){
       return this.productService.getLoggedInUser();
    }
    logoutUser(){
      return this.productService.setUserLogOut();
    }
}