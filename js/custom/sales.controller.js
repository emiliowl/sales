/**
 * Created by murta
 */
(function() {
    'use strict';

    angular.module('msit-store').controller('SalesCtrl', ["productsService",
    	"salesService",
    	"$scope",
		function(productsService, salesService, $scope) {
	        var self = this;

	        self.products = productsService.products;
	        self.sales = salesService.sales;
	        self.selected = {sale_items: []};
	        self.newItem = {
	        };

	        self.cancel = function() {
	            self.newItem = {};
	            self.selected = {sale_items: []};
	            salesService.loadAll();
	        };

	        self.addItem = function() {
	        	var saleItem = {
	        		name: self.newItem.product.name,
					origin_id: parseInt(self.newItem.product.id),
					value: self.newItem.product.value,
					quantity: parseInt(self.newItem.quantity)
	        	};
	        	self.selected.sale_items.push(saleItem);
	        	self.newItem = {};
	        };

	        self.save = function() {
	            salesService.create(self.selected, function() {
	            	self.selected = {sale_items: []};
	            });
	        };

	        self.destroy = function(sale) {
	            if(sale.id && sale.id !== '') {
	                salesService.destroy(sale, function() {
	                    alert("Seu registro foi removido");
	                    self.cancel();
	                });
	            }
	        };
    	}
    ]);
})();