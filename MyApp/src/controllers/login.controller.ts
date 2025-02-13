export class LoginController{
    email: string = '';
    password: string = '';

    constructor(){

    }

    onClickLogin(){
        if(this.email === 'vaibhav' && this.password == 'vaibhav'){
            sessionStorage.setItem('isUserLoggedIn', '1');
        }
    }
    getLoggedInUser(){
        let temp = sessionStorage.getItem('isUserLoggedIn');
        if(temp == '1'){
            return true;
        }
        return false;
    }
}