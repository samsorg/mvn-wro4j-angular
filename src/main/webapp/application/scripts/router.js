angular.module('myModule').config([ '$routeProvider', function($routeProvider) {

	$routeProvider

	/** ---------------------------
			MY-VIEW
	--------------------------- **/
	.when('/myView', {

		templateUrl : 'views/myView/view.html'

	});
} ]);