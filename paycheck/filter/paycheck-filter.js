angular.module('AngularPaycheck').filter('paycheckFilter', function() {
	return function(input,arg) {
		return 'output';
	};
});