/**
 * Created by murta
 */
(function() {
    'use strict';

    angular.module('msit-store').controller('ProductsCtrl', ["productsService",
    	"$scope",
		function(productsService, $scope) {
	        var self = this;

	        self.products = productsService.products;
	        self.selected = undefined;

	        self.new = function() {
	            self.selected = {};
	        };

	        self.cancel = function() {
	            self.selected = undefined;
	            productsService.loadAll();
	        };

	        self.save = function() {
	            if(self.selected.id && self.selected.id !== '') {
	                productsService.update(self.selected);
	            } else {
	                productsService.create(self.selected);
	            }
	        };

	        self.destroy = function(product) {
	            if(product.id && product.id !== '') {
	                productsService.destroy(product, function() {
	                    alert("Seu registro foi removido");
	                    self.cancel();
	                });
	            }
	        };

	        self.edit = function(product) {
	            productsService.loadAll();
	            self.selected = product;
	        };
    	}
    ]);
})();