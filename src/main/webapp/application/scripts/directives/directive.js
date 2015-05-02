angular.module('myModule').directive('myDirective', [ function() {
	return {
		restrict : 'EA',
		scope : {
			application : '='
		},
		link : function(scope, element, attrs) {
		}
	};
} ]);