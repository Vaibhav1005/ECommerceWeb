var LoginController = /** @class */ (function () {
    function LoginController($scope, $location, productService) {
        this.$scope = $scope;
        this.$location = $location;
        this.productService = productService;
        this.email = '';
        this.password = '';
        this.productService.setUserLogOut();
    }
    LoginController.prototype.onClickLogin = function () {
        if (this.email === 'vaibhav' && this.password == 'vaibhav') {
            this.productService.setUserLogIn();
            this.productService.setRoute('home');
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
    LoginController.$inject = ['$scope', '$location', 'ProductService'];
    return LoginController;
}());
