var LoginController = /** @class */ (function () {
    function LoginController() {
        this.email = '';
        this.password = '';
    }
    LoginController.prototype.onClickLogin = function () {
        if (this.email === 'vaibhav' && this.password == 'vaibhav') {
            sessionStorage.setItem('isUserLoggedIn', '1');
        }
    };
    LoginController.prototype.getLoggedInUser = function () {
        var temp = sessionStorage.getItem('isUserLoggedIn');
        if (temp == '1') {
            return true;
        }
        return false;
    };
    LoginController.prototype.onValidate = function(){
        
    }
    return LoginController;
}());
