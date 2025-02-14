import { IScopeCustom } from "../interfaces/iscope.interface";
import { ProductService } from "../services/product.service";

export class LoginController{
    static $inject = ['$scope', '$location','ProductService'];
    email: string = '';
    password: string = '';

    constructor(private $scope: IScopeCustom, private $location: angular.ILocationService, private productService: ProductService){
        this.productService.setUserLogOut()
    }

    onClickLogin(){
        if(this.email === 'vaibhav' && this.password == 'vaibhav'){
            this.productService.setUserLogIn();
            this.productService.setRoute('home');
        }
    }
    getLoggedInUser(){
       return this.productService.getLoggedInUser();
    }
    checkIfLoginPage(){
        if(this.$location.path() != '/login'){
            return true;
        }
        return false;
    }
    logoutUser(){
       return this.productService.setUserLogOut();        
    }
}