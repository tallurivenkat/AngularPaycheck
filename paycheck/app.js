angular.module('AngularPaycheck', ['ui.bootstrap', 'ui.utils', 'ngRoute', 'ngAnimate', 'paycheckModule']);

angular.module('AngularPaycheck').config(function($routeProvider) {

    /* Add New Routes Above */
    $routeProvider.otherwise({redirectTo:'/home'});

});

angular.module('AngularPaycheck').run(function($rootScope) {

    $rootScope.safeApply = function(fn) {
        var phase = $rootScope.$$phase;
        if (phase === '$apply' || phase === '$digest') {
            if (fn && (typeof(fn) === 'function')) {
                fn();
            }
        } else {
            this.$apply(fn);
        }
    };

});
