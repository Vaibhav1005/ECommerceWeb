import angular from "angular";
import { Product } from "../models/product.model";
import { User } from "../models/user.model";

export class ProductService {
    static $inject = ['$http','$location'];

    constructor(private $http: angular.IHttpService, private $location: angular.ILocationService) {

    }

    public getProductsData(): angular.IHttpPromise<Product[]> {
        return this.$http.get("./product.data.json");
    }
    public getCartProducts() {
        return JSON.parse(JSON.stringify(sessionStorage.getItem('cartProducts')));
    }
    public getCartProductsCount() {
        let tempdata = JSON.parse(sessionStorage.getItem('cartProducts') || '[]')
        return tempdata != null ? tempdata.length : 0;
    }
    public addProductToCart(product: Product[]){
        sessionStorage.setItem('cartProducts', JSON.stringify(product));
    }
    public setUserLogOut(){
        sessionStorage.setItem('isUserLoggedIn', '0');
    }
    public setUserLogIn(user: User){
        sessionStorage.setItem('isUserLoggedIn', '1');
        sessionStorage.setItem('loggedInUser', JSON.stringify(user));
    }
    public getLoggedInUser(){
        let temp = sessionStorage.getItem('isUserLoggedIn');
        if(temp == '1'){
            return true;
        }
        return false;
    }
    public setRoute(path: string){
        this.$location.path('/'+path);
    }
}
