var ProductService = /** @class */ (function () {
    function ProductService($http, $location) {
        this.$http = $http;
        this.$location = $location;
    }
    ProductService.prototype.getProductsData = function () {
        return this.$http.get("./product.data.json");
    };
    ProductService.prototype.getCartProducts = function () {
        return JSON.parse(JSON.stringify(sessionStorage.getItem('cartProducts')));
    };
    ProductService.prototype.getCartProductsCount = function () {
        var tempdata = JSON.parse(sessionStorage.getItem('cartProducts') || '[]');
        return tempdata != null ? tempdata.length : 0;
    };
    ProductService.prototype.addProductToCart = function (product) {
        sessionStorage.setItem('cartProducts', JSON.stringify(product));
    };
    ProductService.prototype.setUserLogOut = function () {
        sessionStorage.setItem('isUserLoggedIn', '0');
    };
    ProductService.prototype.setUserLogIn = function (user) {
        sessionStorage.setItem('isUserLoggedIn', '1');
        sessionStorage.setItem('loggedInUser', JSON.stringify(user));
    };
    ProductService.prototype.getLoggedInUser = function () {
        var temp = sessionStorage.getItem('isUserLoggedIn');
        if (temp == '1') {
            return true;
        }
        return false;
    };
    ProductService.prototype.setRoute = function (path) {
        this.$location.path('/' + path);
    };
    ProductService.$inject = ['$http', '$location'];
    return ProductService;
}());
