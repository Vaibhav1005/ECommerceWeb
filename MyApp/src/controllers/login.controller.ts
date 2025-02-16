import { IScopeCustom } from "../interfaces/iscope.interface";
import { User } from "../models/user.model";
import { LoginService } from "../services/login.service";
import { ProductService } from "../services/product.service";

export class LoginController{
    static $inject = ['$scope', '$location','ProductService','LoginService'];
    username: string = '';
    password: string = '';

    constructor(private $scope: IScopeCustom, private $location: angular.ILocationService, private productService: ProductService, private loginService: LoginService){
        this.productService.setUserLogOut()
    }

    onClickLogin(){
        this.loginService.getAppUsers().then((response) => {
            this.authenticateUser(response);
        });
    }
    authenticateUser(response : User[]){
        for(let i = 0; i < response.length; i++){
            if(response[i].Username === this.username && response[i].Password === this.password){
                this.productService.setUserLogIn(response[i]);
                this.productService.setRoute('home');
            }else{
                const errorElement = document.getElementsByClassName('error-message');
                const inputElement = document.getElementsByClassName('input-field');
                if (errorElement.length > 0) {
                    for (let i = 0; i < errorElement.length; i++) {
                        (errorElement[i] as HTMLElement).style.display = 'block';
                    }
                }
                if(inputElement){
                    for(let i = 0; i < inputElement.length; i++){
                        inputElement[i].classList.add('error');
                    }
                }
            }
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