var ShoppingController = /** @class */ (function () {
    function ShoppingController($scope, productService) {
        this.productService = productService;
        this.products = [];
        this.cartItemCount = 0;
        this.cartTotal = 0;
        this.getCartData();
        $scope['vm'] = this;
    }
    ShoppingController.prototype.getCartData = function () {
        this.products = JSON.parse(this.productService.getCartProducts());
        if (this.products) {
            this.getTotalAmount();
            this.cartItemCount = this.products.length;
        }
    };
    ShoppingController.prototype.getCartCount = function () {
        var length = this.productService.getCartProductsCount();
        if (length == null) {
            return 0;
        }
        return length;
    };
    ShoppingController.prototype.getTotalAmount = function () {
        this.cartTotal = 0;
        for (var i = 0; i < this.products.length; i++) {
            this.cartTotal += parseInt(this.products[i].price);
        }
    };
    ShoppingController.prototype.removeFromCart = function (productId) {
        this.products = this.products.filter(function (o) { return o.id != productId; });
        this.productService.addProductToCart(this.products);
        this.getTotalAmount();
    };
    ShoppingController.$inject = ['$scope', 'ProductService'];
    return ShoppingController;
}());