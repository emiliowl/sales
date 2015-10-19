(function() {
    'use strict';
	
	angular.module('msit-store', ['ui.router', 'ui.select', 'ngSanitize']);
	angular.module('msit-store').run(["$rootScope",function($rootScope) {
	    // Set reference to access them from any scope
	    $rootScope.app = {
	    	env: {
	    		backend: {
	    			products: "http://localhost:4000",
	    			sales: "http://localhost:5000"
	    		}
	    	}
	    };
	}]);

})();