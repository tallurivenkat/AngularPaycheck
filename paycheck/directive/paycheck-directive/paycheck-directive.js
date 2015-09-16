angular.module('AngularPaycheck').directive('paycheckDirective', function() {
	return {
		restrict: 'E',
		replace: true,
		scope: {

		},
		templateUrl: 'directive/paycheck-directive/paycheck-directive.html',
		link: function(scope, element, attrs, fn) {


		}
	};
});
