module app.productList {
	interface IProductDetailCtrl {
		title: string;
		product: app.domain.IProduct;
	}

	interface IProductParams extends ng.route.IRouteParamsService {
		productId: number;
	}

	class ProductDetailCtrl implements IProductDetailCtrl {
		title: string;
		product: app.domain.IProduct;

		static $inject = ['dataAccessService', '$routeParams']
		constructor(private dataAccessService: app.common.DataAccessService, private $routeParams: IProductParams) {
			this.title = 'Product Details';

			var productResource = dataAccessService.getProductResource();

			productResource.get({ productId: $routeParams.productId }, (data: app.domain.IProduct) => {
				this.product = data;
			});
		}
	}

	angular.module('productManagement').controller('ProductDetailCtrl', ProductDetailCtrl);

}