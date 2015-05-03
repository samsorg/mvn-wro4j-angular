angular.module('myModule').factory('MyService', [ function() {

	var service = {
		getData: function(){
		    return [{
		        id: 1,
		        name: "Sam"
		    }];
		}
	};
	return service;

} ]);
