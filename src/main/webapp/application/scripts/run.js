angular.module('myModule').run([ function() {
	alert('your application is up and running!!!');
} ]);

angular.bootstrap(window.document, [ 'myModule' ]);