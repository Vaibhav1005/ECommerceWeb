var ProductCatalogController = /** @class */ (function () {
    function ProductCatalogController($scope, productService) {
        this.productService = productService;
        this.products = [];
        this.getProductsData();
        $scope['vm'] = this;
    }
    ProductCatalogController.prototype.getProductsData = function () {
        var _this = this;
        this.productService.getProductsData().
            then(function (response) {
            _this.products = response.data;
        })
            .catch(function (error) {
            console.error('Error loading products:', error);
        });
    };
    ProductCatalogController.prototype.onAddCart = function (product) {
        var tempData = [];
        if (product) {
            tempData = JSON.parse(this.productService.getCartProducts());
            if (tempData) {
                tempData.push(product);
            }
            if (tempData == null) {
                tempData = [];
                tempData.push(product);
            }
            this.productService.addProductToCart(tempData);
            alert('Item added to cart successfully!!');
        }
    };
    ProductCatalogController.prototype.getLoggedInUser = function () {
        return this.productService.getLoggedInUser();
    };
    ProductCatalogController.prototype.logoutUser = function () {
        return this.productService.setUserLogOut();
    };
    ProductCatalogController.$inject = ['$scope', 'ProductService'];
    return ProductCatalogController;
}());
