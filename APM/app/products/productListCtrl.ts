module app.productList {
	interface IProductListModel {
		title: string;
		showImage: boolean;
		products: app.domain.IProduct[];
		toggleImage(): void;
	}

	class ProductListCtrl implements IProductListModel {
		title: string;
		showImage: boolean;
		products: app.domain.IProduct[];
		static $inject = ['dataAccessService'];
		constructor(private dataAccessService: app.common.DataAccessService) {
			this.title = 'Product List';
			this.showImage = false;
			this.products = [];

			var productResource = dataAccessService.getProductResource();

			productResource.query((data: app.domain.IProduct[]) => {
				this.products = data;
			});

			var newProduct = new app.domain.Product(6, "Sae", "TBX-002", new Date(), 99, "asdfasdf", "");
			newProduct.calculateDiscount(10);
			this.products.push(newProduct);
		}

		toggleImage(): void {
			this.showImage = !this.showImage;
		}
	}

	angular.module('productManagement').controller('ProductListCtrl', ProductListCtrl);
}