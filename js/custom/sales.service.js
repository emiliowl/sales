/**
 * Created by murta
 */
(function() {
    'use strict';
    angular.module('msit-store').factory('salesService', ['$rootScope',
    	'$http',
	    function($rootScope, $http) {
	        var self = this;
	        self.sales = [];

	        self.loadAll = function() {
	            return $http.get($rootScope.app.env.backend.sales + '/sales.json').success(function (data) {
	                angular.copy(data, self.sales);
	            }).error(self.handleError);
	        };

	        self.create = function(sale, callback) {
	            return $http.post($rootScope.app.env.backend.sales + '/sales.json', {sale: sale}).success(function (data) {
	                alert('Venda realizada com sucesso!');
	                self.loadAll();
	                callback();
	            }).error(self.handleError);
	        };

	        self.destroy = function(sale, onAfterDestroy) {
	            return $http.delete($rootScope.app.env.backend.sales + '/sales/' + sale.id + '.json')
	                .success(function (data) {
	                    onAfterDestroy();
	                }).error(self.handleError);
	        };

	        self.handleError = function (data) {
	            var message = "";
	            if (data && data.errors) {
	                message = message + Object.keys(data.errors)[0];
	                message = message + ' ' + data.errors[Object.keys(data.errors)[0]];
	            } else {
	                message = "Erro ao comunicar com servidor.";
	            }
	            alert(message);
	        };

	        return self;
	    }
	]);
})();