var ProductCatalogController = /** @class */ (function () {
    function ProductCatalogController($scope, productService) {
        this.productService = productService;
        this.products = [];
        this.searchInput = '';
        this.getProductsData();
        $scope = $scope;
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
    ProductCatalogController.prototype.filterProducts = function (input) {
        var _this = this;
        input = this.serchInput;
        this.productService.getProductsData().
            then(function (response) {
            _this.products = response.data.filter(function (o) { return o.name.toLowerCase().match(input.toLowerCase()); });
            // _this.$scope.$apply();
        })
            .catch(function (error) {
            console.error('Error loading products:', error);
        });
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
var SearchFilterPipe = /** @class */ (function () {
    function SearchFilterPipe() {
    }
    SearchFilterPipe.prototype.transform = function (products) {
        let input = document.getElementById('searchInput').value
        if (!products || !input) {
            return products;
        }
        return products.filter(function (product) { return product.name.toLocaleLowerCase().match(input?.toLocaleLowerCase()) || product.type.toLocaleLowerCase().match(input?.toLocaleLowerCase()) || product.subtype.toLocaleLowerCase().match(input?.toLocaleLowerCase()); });
    };
    return SearchFilterPipe;
}());
