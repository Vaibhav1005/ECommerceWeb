var LoginController = /** @class */ (function () {
    function LoginController($scope, $location, productService, loginService) {
        this.$scope = $scope;
        this.$location = $location;
        this.productService = productService;
        this.loginService = loginService;
        this.username = '';
        this.password = '';
        this.productService.setUserLogOut();
    }
    LoginController.prototype.onClickLogin = function () {
        var _this = this;
        this.loginService.getAppUsers().then(function (response) {
            _this.authenticateUser(response);
        });
    };
    LoginController.prototype.authenticateUser = function (response) {
        for (var i = 0; i < response.length; i++) {
            if (response[i].Username === this.username && response[i].Password === this.password) {
                this.productService.setUserLogIn(response[i]);
                this.productService.setRoute('home');
            }
            else {
                var errorElement = document.getElementsByClassName('error-message');
                var inputElement = document.getElementsByClassName('input-field');
                if (errorElement.length > 0) {
                    for (var i_1 = 0; i_1 < errorElement.length; i_1++) {
                        errorElement[i_1].style.display = 'block';
                    }
                }
                if (inputElement) {
                    for (var i_2 = 0; i_2 < inputElement.length; i_2++) {
                        inputElement[i_2].classList.add('error');
                    }
                }
            }
        }
    };
    LoginController.prototype.getLoggedInUser = function () {
        return this.productService.getLoggedInUser();
    };
    LoginController.prototype.checkIfLoginPage = function () {
        if (this.$location.path() != '/login') {
            return true;
        }
        return false;
    };
    LoginController.prototype.logoutUser = function () {
        return this.productService.setUserLogOut();
    };
    LoginController.$inject = ['$scope', '$location', 'ProductService', 'LoginService'];
    return LoginController;
}());