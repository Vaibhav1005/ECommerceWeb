import angular from "angular";
import { Product } from "../models/product.model";

export class ProductService {

    static $inject = ['$http'];

    constructor(private $http: angular.IHttpService) {

    }

    public getProductsData(): angular.IHttpPromise<Product[]> {
        return this.$http.get("./product.data.json");
    }
    public getCartProducts() {
        return JSON.parse(JSON.stringify(sessionStorage.getItem('cartProducts')));
    }
    public getCartProductsCount() {
        let tempdata = JSON.parse(JSON.stringify(sessionStorage.getItem('cartProducts')))
        return tempdata.length;
    }
    public addProductToCart(product: Product[]){
        sessionStorage.setItem('cartProducts', JSON.stringify(product));
    }
}
