import { forEach } from "angular";
import { IScopeCustom } from "../interfaces/iscope.interface";
import { Product } from "../models/product.model";
import { ProductService } from "../services/product.service";

export class ShoppingController{
        products: Product[] = [];
        cartItemCount: number = 0;
        cartTotal : number = 0;
         static $inject = ['$scope','ProductService']
          constructor($scope: IScopeCustom,
              private productService: ProductService
          ){
              this.getCartData();
              $scope['vm'] = this;
          } 
          getCartData(){
            this.products = JSON.parse(this.productService.getCartProducts());
            this.cartItemCount = this.products.length;
            if(this.products){
            this.getTotalAmount();
            }
          }
          getCartCount(){
            return this.productService.getCartProductsCount();
          }
          getTotalAmount(){
            this.cartTotal = 0;
            for(let i = 0; i < this.products.length; i++){
              this.cartTotal += parseInt(this.products[i].price);
            }
          }
          removeFromCart(productId : string){
            this.products = this.products.filter(o => o.id != productId);
            this.productService.addProductToCart(this.products);
            this.getTotalAmount();
          }
}