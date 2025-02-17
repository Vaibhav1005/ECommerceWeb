import { IScopeCustom } from "../interfaces/iscope.interface";
import { Product } from "../models/product.model";
import { ProductService } from "../services/product.service";
export class ProductCatalogController{
    products: Product[] = [];
    serchInput: string = '';
    $scope!: IScopeCustom;
   static $inject = ['$scope','ProductService']
    constructor($scope: IScopeCustom,
        private productService: ProductService
    ){
        this.getProductsData();
        $scope = $scope;
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
    filterProducts(input : string){
      input = this.serchInput;
      this.productService.getProductsData().
       then((response) => {
        this.products = response.data.filter(o => o.name.toLowerCase().match(input.toLowerCase()));
      })
      .catch((error) => {
        console.error('Error loading products:', error);
      });
    }
    getLoggedInUser(){
       return this.productService.getLoggedInUser();
    }
    logoutUser(){
      return this.productService.setUserLogOut();
    }
}
export class SearchFilterPipe {
  transform(products: Product[], searchInput: string): any[] {
    
    if (!products || !searchInput) {
      return products;
    }
    return products.filter(product => product.name.toLocaleLowerCase().match(searchInput.toLocaleLowerCase()));
  }

}