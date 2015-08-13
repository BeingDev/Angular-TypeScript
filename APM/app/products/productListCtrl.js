var app;
(function (app) {
    var productList;
    (function (productList) {
        var ProductListCtrl = (function () {
            function ProductListCtrl(dataAccessService) {
                var _this = this;
                this.dataAccessService = dataAccessService;
                this.title = 'Product List';
                this.showImage = false;
                this.products = [];
                var productResource = dataAccessService.getProductResource();
                productResource.query(function (data) {
                    _this.products = data;
                });
                var newProduct = new app.domain.Product(6, "Sae", "TBX-002", new Date(), 99, "asdfasdf", "");
                newProduct.calculateDiscount(10);
                this.products.push(newProduct);
            }
            ProductListCtrl.prototype.toggleImage = function () {
                this.showImage = !this.showImage;
            };
            ProductListCtrl.$inject = ['dataAccessService'];
            return ProductListCtrl;
        })();
        angular.module('productManagement').controller('ProductListCtrl', ProductListCtrl);
    })(productList = app.productList || (app.productList = {}));
})(app || (app = {}));
